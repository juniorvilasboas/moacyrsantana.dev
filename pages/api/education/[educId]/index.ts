import { Education, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getEducationById, remove, update } from 'services/education'

type EducationData = {
  id?: string
  data?: Education | null
  success: boolean
}

const Education = async (
  req: NextApiRequest,
  res: NextApiResponse<Education | EducationData | null>
) => {
  const educId = String(req.query.educId)
  if (req.method === 'PATCH') {
    const educationData: Prisma.EducationUpdateInput = { ...req.body }

    const educationItem = await getEducationById(educId)

    if (educationItem) {
      const savedEducation = await update(educId, educationData)

      return res.send({ data: savedEducation, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const educationItem = await getEducationById(educId)

    if (educationItem) {
      await remove(educId)

      return res.send({ id: educId, success: true })
    }
    return res.send({ success: false })
  }

  const educations = await getEducationById(educId)

  //@ts-ignore
  return res.send(educations)
}

export default Education
