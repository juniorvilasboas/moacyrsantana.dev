import { Experience, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getExperience = async () => {
  const experiences = await prisma.experience.findMany({
    orderBy: {
      begin: 'desc'
    }
  })

  return experiences
}

export const getExperienceById = async (id: string) => {
  const experience = await prisma.experience.findFirst({
    where: {
      id
    }
  })

  return experience
}

export const create = async (
  experienceData: Prisma.ExperienceCreateInput
): Promise<Experience | null> => {
  experienceData.begin = new Date(experienceData.begin)
  if (experienceData.end) {
    experienceData.end = new Date(experienceData.end)
  }
  const savedExperience = await prisma.experience.create({
    data: experienceData
  })

  if (savedExperience) {
    return savedExperience
  }
  return null
}

export const update = async (
  id: string,
  experienceData: Prisma.ExperienceUpdateInput
): Promise<Experience | null> => {
  const savedExperience = await prisma.experience.update({
    data: experienceData,
    where: {
      id
    }
  })

  if (savedExperience) {
    return savedExperience
  }
  return null
}

export const remove = async (id: string): Promise<Experience | null> => {
  const savedExperience = await prisma.experience.delete({
    where: {
      id
    }
  })
  if (savedExperience) {
    return savedExperience
  }
  return null
}
