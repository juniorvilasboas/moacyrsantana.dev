import { Language, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getLanguage } from 'services/language'

const Language = async (
  req: NextApiRequest,
  res: NextApiResponse<Language | null>
) => {
  if (req.method === 'POST') {
    const language: Prisma.LanguageCreateInput = { ...req.body }

    const savedLanguage = await create(language)

    return res.send(savedLanguage)
  }

  const languages = await getLanguage()

  //@ts-ignore
  return res.send(languages)
}

export default Language
