import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Orders() {
  return (
    <ScrollArea className="w-full h-[80vh]">
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
          {Array.from({ length: 32 }).map((_, index) => (
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
  )
}
