import { Experience, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getExperienceById, remove, update } from 'services/experience'

type ExperienceData = {
  id?: string
  data?: Experience | null
  success: boolean
}

const Experience = async (
  req: NextApiRequest,
  res: NextApiResponse<Experience | ExperienceData | null>
) => {
  const experId = String(req.query.experId)
  if (req.method === 'PATCH') {
    const experienceData: Prisma.ExperienceUpdateInput = { ...req.body }

    const experienceItem = await getExperienceById(experId)

    if (experienceItem) {
      const savedExperience = await update(experId, experienceData)

      return res.send({ data: savedExperience, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const experienceItem = await getExperienceById(experId)

    if (experienceItem) {
      await remove(experId)

      return res.send({ id: experId, success: true })
    }
    return res.send({ success: false })
  }

  const experience = await getExperienceById(experId)

  //@ts-ignore
  return res.send({ experience })
}

export default Experience
