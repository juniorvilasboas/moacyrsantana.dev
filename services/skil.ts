import { Skil, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getSkil = async () => {
  const skills = await prisma.skil.findMany({
    include: {
      level: true
    }
  })

  return skills
}

export const getSkilById = async (id: string) => {
  const skil = await prisma.skil.findFirst({
    where: {
      id
    },
    include: {
      level: true
    }
  })

  return skil
}

export const getSkilByName = async (name: string) => {
  const skil = await prisma.skil.findFirst({
    where: {
      name
    },
    include: {
      level: true
    }
  })

  return skil
}

export const create = async (
  skilData: Prisma.SkilCreateManyInput
): Promise<Skil | null> => {
  const savedSkil = await prisma.skil.create({
    data: {
      name: skilData.name,
      site: skilData.site,
      ext: skilData.ext,
      tipo: skilData.tipo,
      //@ts-ignore
      level: {
        //@ts-ignore
        connect: skilData.level
      }
    }
  })

  if (savedSkil) {
    return savedSkil
  }
  return null
}

export const update = async (
  id: string,
  skilData: Prisma.SkilUpdateInput
): Promise<Skil | null> => {
  const savedSkil = await prisma.skil.update({
    data: {
      name: skilData.name,
      site: skilData.site,
      ext: skilData.ext,
      tipo: skilData.tipo,
      //@ts-ignore
      level: {
        //@ts-ignore
        connect: skilData.level
      }
    },
    where: {
      id
    }
  })

  if (savedSkil) {
    return savedSkil
  }
  return null
}

export const remove = async (id: string): Promise<Skil | null> => {
  const savedSkil = await prisma.skil.delete({
    where: {
      id
    }
  })
  if (savedSkil) {
    return savedSkil
  }
  return null
}
