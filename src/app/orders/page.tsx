import CreateOrderButton from './create-order'
import OrdersTable from './list-order-table'

export default function Orders() {
  return (
    <div className="space-y-8 w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-bold text-lg">Orders</h1>
        <div className="flex">
          <CreateOrderButton />
        </div>
      </div>
      <OrdersTable />
    </div>
  )
}
