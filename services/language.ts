import { Language, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getLanguage = async () => {
  const languages = await prisma.language.findMany({
    orderBy: {
      item: 'asc'
    }
  })

  return languages
}

export const getLanguageById = async (id: string) => {
  const language = await prisma.language.findFirst({
    where: {
      id
    }
  })

  return language
}

export const create = async (
  languageData: Prisma.LanguageCreateInput
): Promise<Language | null> => {
  const savedLanguage = await prisma.language.create({ data: languageData })

  if (savedLanguage) {
    return savedLanguage
  }
  return null
}

export const update = async (
  id: string,
  languageData: Prisma.LanguageUpdateInput
): Promise<Language | null> => {
  const savedLanguage = await prisma.language.update({
    data: languageData,
    where: {
      id
    }
  })

  if (savedLanguage) {
    return savedLanguage
  }
  return null
}

export const remove = async (id: string): Promise<Language | null> => {
  const savedLanguage = await prisma.language.delete({
    where: {
      id
    }
  })
  if (savedLanguage) {
    return savedLanguage
  }
  return null
}
