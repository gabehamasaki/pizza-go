import prisma from '@/lib/prima'

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const order = await prisma.order.findFirst({
    where: {
      id: Number(id),
    },
  })
  return Response.json({
    data: order,
  })
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  await prisma.order.delete({
    where: {
      id: Number(params.id),
    },
  })

  return Response.json({})
}
