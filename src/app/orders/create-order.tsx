'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, PlusCircle } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

export const createOrderSchema = z.object({
  client: z.string(),
  value: z.string(),
})

async function createOrder({
  client,
  value,
}: z.infer<typeof createOrderSchema>) {
  fetch('http://localhost:3000/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ client, value }),
  })
}

export default function CreateOrderButton() {
  const form = useForm<z.infer<typeof createOrderSchema>>({
    resolver: zodResolver(createOrderSchema),
  })

  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const { mutateAsync: createOrderAsync } = useMutation({
    mutationFn: createOrder,
    onSuccess(_, variables) {
      queryClient.setQueryData(['orders'], (data: []) => [
        ...data,
        {
          client: variables.client,
          value: variables.value,
        },
      ])
    },
  })

  const onSubmit = (data: z.infer<typeof createOrderSchema>) => {
    const { client, value } = data
    setLoading(true)
    createOrderAsync({ client, value })
      .then(() => {
        setIsOpen(false)
        toast.success('Order successfully created')
        setLoading(false)
      })
      .catch(() => {
        setIsOpen(false)
        toast.error('Error creating order')
        setLoading(false)
      })
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="text-center gap-1 font-bold">
          <PlusCircle className="size-4" />
          Create order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create order</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="client"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Client</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Client" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Value</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" placeholder="Value" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="destructive" disabled={loading}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : 'Create'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
