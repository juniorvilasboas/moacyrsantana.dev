import { Language, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getLanguage = async () => {
  const languages = await prisma.language.findMany({
    include: {
      levelUnderstand: true,
      levelSpeak: true,
      levelWrite: true
    },
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
    },
    include: {
      levelUnderstand: true,
      levelSpeak: true,
      levelWrite: true
    }
  })

  return language
}

export const create = async (
  languageData: Prisma.LanguageCreateInput
): Promise<Language | null> => {
  const savedLanguage = await prisma.language.create({
    data: {
      name: languageData.name,
      levelUnderstand: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: languageData.levelUnderstand
        }
      },
      levelSpeak: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: languageData.levelSpeak
        }
      },
      levelWrite: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: languageData.levelWrite
        }
      }
    }
  })

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
    data: {
      name: languageData.name,
      levelUnderstand: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: languageData.levelUnderstand
        }
      },
      levelSpeak: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: languageData.levelSpeak
        }
      },
      levelWrite: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: languageData.levelWrite
        }
      }
    },
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
