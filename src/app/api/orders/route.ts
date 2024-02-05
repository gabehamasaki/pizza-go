import prisma from '@/lib/prima'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = searchParams.get('limit')
  const orders = await prisma.order.findMany({
    take: limit ? Number(limit) : undefined,
    orderBy: {
      createdAt: 'desc',
    },
  })
  return Response.json({
    data: orders,
  })
}

export async function POST(request: Request) {
  const body = await request.json()
  await prisma.order.create({
    data: {
      client: body.client,
      value: Number(body.value),
    },
  })
  return Response.json({}, { status: 201 })
}
