import { Experience, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getExperience } from 'services/experience'

const Experience = async (
  req: NextApiRequest,
  res: NextApiResponse<Experience | null>
) => {
  if (req.method === 'POST') {
    const experience: Prisma.ExperienceCreateInput = { ...req.body }

    const savedExperience = await create(experience)

    return res.send(savedExperience)
  }

  const experiences = await getExperience()

  //@ts-ignore
  return res.send(experiences)
}

export default Experience
