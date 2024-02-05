import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { OrdersData } from './orders/page'
import { Badge } from '@/components/ui/badge'

export default async function Home() {
  const response = await fetch(
    'http://localhost:3000/api/orders?limit=5&order=asc',
    {
      cache: 'no-store',
    },
  )
  const { data } = (await response.json()) as OrdersData

  const totalResponse = await fetch('http://localhost:3000/api/orders/total')
  const { data: total } = await totalResponse.json()

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Processing Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p>0</p>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Orders Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p>9</p>
          </CardContent>
        </Card>
      </div>
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
    </div>
  )
}
