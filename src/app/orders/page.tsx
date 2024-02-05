import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import CreateOrderButton from './create-order'
import DeleteOrderButton from './delete-order-button'

export interface OrdersData {
  data: {
    id: string
    client: string
    value: number
    createdAt: Date
  }[]
}

export default async function Orders() {
  const response = await fetch('http://localhost:3000/api/orders', {
    cache: 'no-store',
  })
  const { data } = (await response.json()) as OrdersData

  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-bold text-lg">Orders</h1>
        <div className="flex">
          <CreateOrderButton />
        </div>
      </div>
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
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="w-8 max-w-8">{item.id}</TableCell>
              <TableCell>{item.client}</TableCell>
              <TableCell>{item.value}</TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>
                {new Date(item.createdAt).toLocaleString('pt')}
              </TableCell>
              <TableCell>
                <DeleteOrderButton id={item.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
