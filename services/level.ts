import { Level, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getLevel = async () => {
  const levels = await prisma.level.findMany({
    orderBy: {
      nivel: 'asc'
    }
  })

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
