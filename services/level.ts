import { Level, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getLevelSkill = async () => {
  const levels = await prisma.level.findMany({
    where: {
      item: {
        in: [1,2,3,4,]
      }
    },
    orderBy: {
      item: 'asc'
    }
  })
  // const levels = await prisma.$queryRaw(
  //   Prisma.sql`SELECT * FROM public."Level" WHERE item in (1,2,3,4) order By item asc`
  // )

  return levels
}

export const getLevelLanguage = async () => {
  const levels = await prisma.level.findMany({
    where :{
      item: {
        in: [5,6,7,8,9,10,11]
      }
    },
    orderBy: {
      item: 'asc'
    }
  })
  // const levels = await prisma.$queryRaw(
  //   Prisma.sql`SELECT * FROM public."Level" WHERE item in (5,6,7,8,9,10,11) order By item asc`
  // )

  return levels
}

export const getLevelById = async (id: string) => {
  const level = await prisma.level.findFirst({
    where: {
      id
    }
  })

  return level
}

export const create = async (
  levelData: Prisma.LevelCreateInput
): Promise<Level | null> => {
  const savedLevel = await prisma.level.create({ data: levelData })

  if (savedLevel) {
    return savedLevel
  }
  return null
}

// export const createMany = async (
//   levelData: Prisma.LevelCreateInput
// ): Promise<Level | Level[] | null> => {

//   const savedLevel = await prisma.level.create({
//     data: [{
//       id: levelData.id,
//       item: levelData.item,
//       value: levelData.value,
//       label: levelData.label,
//       description: levelData.description,
//     }]
//   })

//   return savedLevel
// }

export const update = async (
  id: string,
  levelData: Prisma.LevelUpdateInput
): Promise<Level | null> => {
  const savedLevel = await prisma.level.update({
    data: levelData,
    where: {
      id
    }
  })

  if (savedLevel) {
    return savedLevel
  }
  return null
}

export const remove = async (id: string): Promise<Level | null> => {
  const savedLevel = await prisma.level.delete({
    where: {
      id
    }
  })
  if (savedLevel) {
    return savedLevel
  }
  return null
}
