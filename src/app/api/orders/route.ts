import prisma from '@/lib/prima'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const orders = await prisma.order.findMany({})
  return Response.json({
    data: orders,
  })
}
