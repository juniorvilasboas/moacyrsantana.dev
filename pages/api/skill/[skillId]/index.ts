import { Skill, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { getSkillById, remove, update } from 'services/skill'

type SkillData = {
  id?: string
  data?: Skill | null
  success: boolean
}

const Skill = async (
  req: NextApiRequest,
  res: NextApiResponse<Skill | SkillData | null>
) => {
  const skillId = String(req.query.skillId)
  if (req.method === 'PATCH') {
    const skillData: Prisma.SkillUpdateInput = { ...req.body }

    const skillItem = await getSkillById(skillId)

    skillData.level = {id: skillData.level}
    if (skillItem) {
      const savedSkill = await update(skillId, skillData)

      return res.send({ data: savedSkill, success: true })
    }
    return res.send({ success: false })
  }

  if (req.method === 'DELETE') {
    const skillItem = await getSkillById(skillId)

    if (skillItem) {
      await remove(skillId)

      return res.send({ id: skillId, success: true })
    }
    return res.send({ success: false })
  }

  const skills = await getSkillById(skillId)

  //@ts-ignore
  return res.send({ skills })
}

export default Skill
