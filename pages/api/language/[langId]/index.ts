import { Language, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getLanguageById, remove, update } from 'services/language'

type LanguageData = {
  id?: string
  data?: Language | null
  success: boolean
}

const Language = async (
  req: NextApiRequest,
  res: NextApiResponse<Language | LanguageData | null>
) => {
  const langId = String(req.query.langId)
  if (req.method === 'PATCH') {
    const languageData: Prisma.LanguageUpdateInput = { ...req.body }

    const languageItem = await getLanguageById(langId)

    if (languageItem) {
      const savedLanguage = await update(langId, languageData)

      return res.send({ data: savedLanguage, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const languageItem = await getLanguageById(langId)

    if (languageItem) {
      await remove(langId)

      return res.send({ id: langId, success: true })
    }
    return res.send({ success: false })
  }

  const language = await getLanguageById(langId)

  //@ts-ignore
  return res.send({ language })
}

export default Language
