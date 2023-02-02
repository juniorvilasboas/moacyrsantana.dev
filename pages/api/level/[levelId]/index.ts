import { Level, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getLevelById, remove, update } from 'services/level'

type LevelData = {
  id?: string
  data?: Level | null
  success: boolean
}

const Level = async (
  req: NextApiRequest,
  res: NextApiResponse<Level | LevelData | null>
) => {
  const levelId = String(req.query.levelId)
  if (req.method === 'PATCH') {
    const levelData: Prisma.LevelUpdateInput = { ...req.body }
    console.log('Data: ', levelData)

    const levelItem = await getLevelById(levelId)
    console.log('Item: ', levelItem)

    if (levelItem) {
      const savedLevel = await update(levelId, levelData)

      return res.send({ data: savedLevel, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const levelItem = await getLevelById(levelId)

    if (levelItem) {
      await remove(levelId)

      return res.send({ id: levelId, success: true })
    }
    return res.send({ success: false })
  }

  const level = await getLevelById(levelId)

  //@ts-ignore
  return res.send({ level })
}

export default Level
