import { Portifolio, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getPortifolioById, remove, update } from 'services/portifolio'

type PortifolioData = {
  id?: string
  data?: Portifolio | null
  success: boolean
}

const Portifolio = async (
  req: NextApiRequest,
  res: NextApiResponse<Portifolio | PortifolioData | null>
) => {
  const portId = String(req.query.portId)
  if (req.method === 'PATCH') {
    const portifolioData: Prisma.PortifolioUpdateInput = { ...req.body }

    const portifolioItem = await getPortifolioById(portId)

    if (portifolioItem) {
      const savedPortifolio = await update(portId, portifolioData)

      return res.send({ data: savedPortifolio, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const portifolioItem = await getPortifolioById(portId)

    if (portifolioItem) {
      await remove(portId)

      return res.send({ id: portId, success: true })
    }
    return res.send({ success: false })
  }

  const portifolio = await getPortifolioById(portId)

  //@ts-ignore
  return res.send({ portifolio })
}

export default Portifolio
