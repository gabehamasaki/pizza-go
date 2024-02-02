import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Home() {
  return (
    <main className="flex-1">
      <div className="container relative">
        <div className="flex gap-4 py-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent>
              <p>R$ 900.00</p>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Total</CardTitle>
            </CardHeader>
            <CardContent>
              <p>R$ 900.00</p>
            </CardContent>
          </Card>
        </div>
        <div className="w-full space-y-4">
          <div className="flex items-center justify-between">
            <h1 className="text-bold text-lg">Latest Orders</h1>
          </div>
          <ScrollArea className="w-full h-96">
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
                {Array.from({ length: 9 }).map((_, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>R$ 100.00</TableCell>
                    <TableCell>Delivered</TableCell>
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>
      </div>
    </main>
  )
}
