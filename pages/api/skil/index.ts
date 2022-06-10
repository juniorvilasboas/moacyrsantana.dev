import { Skil, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getSkil, getSkilByName } from 'services/skil'

const Skil = async (req: NextApiRequest, res: NextApiResponse<Skil | null>) => {
  if (req.method === 'POST') {
    const skil: Prisma.SkilCreateManyInput = { ...req.body }

    const savedSkil = await create(skil)

    return res.send(savedSkil)
  }

  if (req.query.name) {
    const skil = await getSkilByName(String(req.query.name))

    //@ts-ignore
    return res.send(skil)
  }

  const skills = await getSkil()

  //@ts-ignore
  return res.send(skills)
}

export default Skil
