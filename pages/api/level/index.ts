import { Level, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getLevel } from 'services/level'

const Level = async (
  req: NextApiRequest,
  res: NextApiResponse<Level | null>
) => {
  if (req.method === 'POST') {
    const level: Prisma.LevelCreateInput = { ...req.body }

    const savedLevel = await create(level)

    return res.send(savedLevel)
  }

  const levels = await getLevel()

  //@ts-ignore
  return res.send(levels)
}

export default Level
