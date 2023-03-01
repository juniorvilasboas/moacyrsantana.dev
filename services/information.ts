import { Information, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getInformation = async () => {
  const informations = await prisma.information.findMany()

  return informations
}

export const getInformationById = async (id: string) => {
  const information = await prisma.information.findFirst({
    where: {
      id
    }
  })

  return information
}

export const create = async (
  informationData: Prisma.InformationCreateInput
): Promise<Information | null> => {
  const savedInformation = await prisma.information.create({
    data: informationData
  })

  if (savedInformation) {
    return savedInformation
  }
  return null
}

export const update = async (
  id: string,
  informationData: Prisma.InformationUpdateInput
): Promise<Information | null> => {
  const savedInformation = await prisma.information.update({
    data: informationData,
    where: {
      id
    }
  })

  if (savedInformation) {
    return savedInformation
  }
  return null
}

export const remove = async (id: string): Promise<Information | null> => {
  const savedInformation = await prisma.information.delete({
    where: {
      id
    }
  })
  if (savedInformation) {
    return savedInformation
  }
  return null
}
