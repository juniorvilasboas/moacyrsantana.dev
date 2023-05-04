import { Education, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getEducation = async () => {
  const educationByTipo = await prisma.education.groupBy({
    by: ['tipo'],
  })

  const educations = await prisma.education.findMany({
    where: {
      tipo: { in: educationByTipo.map((education) => education.tipo)}
    },
    orderBy: {
      begin: 'desc'
    }
  })

  return educations
}

export const getEducationById = async (id: string) => {
  const education = await prisma.education.findFirst({
    where: {
      id
    }
  })

  return education
}

export const create = async (
  educationData: Prisma.EducationCreateInput
): Promise<Education | null> => {
  educationData.begin = new Date(educationData.begin)
  if (educationData.end) {
    educationData.end = new Date(educationData.end)
  }
  const savedEducation = await prisma.education.create({ data: educationData })

  if (savedEducation) {
    return savedEducation
  }
  return null
}

export const update = async (
  id: string,
  educationData: Prisma.EducationUpdateInput
): Promise<Education | null> => {
  const savedEducation = await prisma.education.update({
    data: educationData,
    where: {
      id
    }
  })

  if (savedEducation) {
    return savedEducation
  }
  return null
}

export const remove = async (id: string): Promise<Education | null> => {
  const savedEducation = await prisma.education.delete({
    where: {
      id
    }
  })
  if (savedEducation) {
    return savedEducation
  }
  return null
}
