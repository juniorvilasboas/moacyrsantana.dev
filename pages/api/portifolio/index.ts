import { Portifolio, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getPortifolio } from 'services/portifolio'

const Portifolio = async (
  req: NextApiRequest,
  res: NextApiResponse<Portifolio | null>
) => {
  if (req.method === 'POST') {
    const portifolio: Prisma.PortifolioCreateInput = { ...req.body }

    const savedPortifolio = await create(portifolio)

    return res.send(savedPortifolio)
  }

  const portifolios = await getPortifolio()

  //@ts-ignore
  return res.send(portifolios)
}

export default Portifolio
