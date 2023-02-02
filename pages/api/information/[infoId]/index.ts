import { Information, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getInformationById, remove, update } from 'services/information'

type InformationData = {
  id?: string
  data?: Information | null
  success: boolean
}

const Information = async (
  req: NextApiRequest,
  res: NextApiResponse<Information | InformationData | null>
) => {
  const infoId = String(req.query.infoId)
  if (req.method === 'PATCH') {
    const informationData: Prisma.InformationUpdateInput = { ...req.body }

    const informationItem = await getInformationById(infoId)

    if (informationItem) {
      const savedInformation = await update(infoId, informationData)

      return res.send({ data: savedInformation, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const informationItem = await getInformationById(infoId)

    if (informationItem) {
      await remove(infoId)

      return res.send({ id: infoId, success: true })
    }
    return res.send({ success: false })
  }

  const informations = await getInformationById(infoId)

  //@ts-ignore
  return res.send(informations)
}

export default Information
