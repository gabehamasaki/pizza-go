'use client'

import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export interface DeleteOrderProps {
  id: string
}

export default function DeleteOrderButton(props: DeleteOrderProps) {
  const router = useRouter()
  const { id } = props
  const onDelete = () => {
    fetch(`http://localhost:3000/api/orders/${id}`, {
      method: 'DELETE',
    }).then(() => {
      toast.success('Order deleted successfully')
      router.refresh()
    })
  }
  return (
    <Button variant="destructive" className="p-0 w-8 h-8" onClick={onDelete}>
      <Trash2 className="w-8 h-4 hover:brightness-60 transition-all" />
    </Button>
  )
}
