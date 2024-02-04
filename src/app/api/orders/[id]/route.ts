import prisma from '@/lib/prima'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const order = await prisma.order.findFirst({
    where: {
      id,
    },
  })
  return Response.json({
    data: order,
  })
}
