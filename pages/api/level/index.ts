import { Level, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getLevelLanguage, getLevelSkill } from 'services/level'

const Level = async (
  req: NextApiRequest,
  res: NextApiResponse<Level | null>
) => {
  if (req.method === 'POST') {
    const level: Prisma.LevelCreateInput = { ...req.body }
    const savedLevel = await create(level)

    return res.send(savedLevel)
  }

  let levels

  if (req.query.tipo === 'language') {
    levels = await getLevelLanguage()
  }

  if (req.query.tipo === 'skill') {
    levels = await getLevelSkill()
  }

  //@ts-ignore
  return res.send(levels)
}

export default Level
