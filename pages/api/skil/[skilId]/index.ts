import { Skil, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSkilById, remove, update } from 'services/skil'

type SkilData = {
  id?: string
  data?: Skil | null
  success: boolean
}

const Skil = async (
  req: NextApiRequest,
  res: NextApiResponse<Skil | SkilData | null>
) => {
  const skilId = String(req.query.skilId)
  if (req.method === 'PATCH') {
    const skilData: Prisma.SkilUpdateInput = { ...req.body }

    const skilItem = await getSkilById(skilId)

    if (skilItem) {
      const savedSkil = await update(skilId, skilData)

      return res.send({ data: savedSkil, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const skilItem = await getSkilById(skilId)

    if (skilItem) {
      await remove(skilId)

      return res.send({ id: skilId, success: true })
    }
    return res.send({ success: false })
  }

  const skills = await getSkilById(skilId)

  //@ts-ignore
  return res.send({ skills })
}

export default Skil
