'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useQuery } from '@tanstack/react-query'
import DeleteOrderButton from './delete-order-button'

export interface OrdersData {
  data: {
    id: string
    client: string
    value: number
    createdAt: Date
  }[]
}

async function fetchOrders() {
  const response = await fetch('http://localhost:3000/api/orders')
  const { data } = (await response.json()) as OrdersData
  return data
}

export default function OrdersTable() {
  const { data: orders } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
  })
  return (
    <Table>
      <TableHeader className="sticky w-full top-0 h-10 border-b-2 border-border rounded-t-md">
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Client</TableHead>
          <TableHead>Value</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders?.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="min-w-32">{item.id}</TableCell>
            <TableCell>{item.client}</TableCell>
            <TableCell>
              {item.value.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </TableCell>
            <TableCell>Delivered</TableCell>
            <TableCell>
              {new Date(item.createdAt).toLocaleString('pt-BR')}
            </TableCell>
            <TableCell>
              <DeleteOrderButton id={item.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
