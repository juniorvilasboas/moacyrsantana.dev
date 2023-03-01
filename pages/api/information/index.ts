import { Information, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getInformation } from 'services/information'

const Information = async (
  req: NextApiRequest,
  res: NextApiResponse<Information | null>
) => {
  if (req.method === 'POST') {
    const information: Prisma.InformationCreateInput = { ...req.body }

    const savedInformation = await create(information)

    return res.send(savedInformation)
  }

  const informations = await getInformation()

  //@ts-ignore
  return res.send(informations)
}

export default Information
