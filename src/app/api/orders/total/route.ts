import prisma from '@/lib/prima'

export const dynamic = 'force-dynamic'

export async function GET() {
  const orders = await prisma.order.findMany({})

  let total = 0

  orders.forEach((order) => {
    total += order.value
  })

  return Response.json({
    data: total,
  })
}
