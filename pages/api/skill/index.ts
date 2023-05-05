import { Skill, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getSkill, getSkillByName, getSkillSelect } from 'services/skill'

const Skill = async (req: NextApiRequest, res: NextApiResponse<Skill | null>) => {
  if (req.method === 'POST') {
    const skill: Prisma.SkillCreateInput = { ...req.body }

    //@ts-ignore
    skill.level = skill.level
    if (skill.site === '') {
      skill.site = '#'
    } else {
      skill.site = `https://${skill?.site}`
    }
    const savedSkill = await create(skill)

    return res.send(savedSkill)
  }

  if (req.query.name) {
    const skill = await getSkillByName(String(req.query.name))

    //@ts-ignore
    return res.send(skill)
  }

  if (req.query.select) {
    const skill = await getSkillSelect()

    //@ts-ignore
    return res.send(skill)
  }

  const skills = await getSkill()

  //@ts-ignore
  return res.send(skills)
}

export default Skill
