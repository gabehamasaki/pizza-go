import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { OrdersData } from '@/app/orders/page'
import { Badge } from '@/components/ui/badge'

export default async function OrdersResumeTable() {
  const response = await fetch('http://localhost:3000/api/orders?limit=5', {
    cache: 'no-store',
  })
  const { data } = (await response.json()) as OrdersData

  return (
    <div className="w-full space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-bold text-lg">Latest Orders</h1>
      </div>
      <Table>
        <TableHeader className="sticky w-full top-0 h-10 border-b-2 border-border rounded-t-md">
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.client}</TableCell>
              <TableCell>
                {order.value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TableCell>
              <TableCell>
                <Badge className="bg-green-500 text-white hover:bg-green-400">
                  Delivered
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleDateString('pt-BR')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
