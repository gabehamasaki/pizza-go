import OrdersResumeTable from '@/components/OrdersResumeTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Suspense } from 'react'

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Total</CardTitle>
          </CardHeader>
          <CardContent>
            <p>100</p>
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
      <Suspense>
        <OrdersResumeTable />
      </Suspense>
    </div>
  )
}
