import { Skill, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getSkill = async () => {
  const skills = await prisma.skill.findMany({
    include: {
      level: true
    }
  })

  return skills
}

export const getSkillSelect = async () => {
  const skills = await prisma.$queryRaw(
    Prisma.sql`SELECT id as value, name as label FROM public."Skill"`
  )

  return skills
}

export const getSkillById = async (id: string) => {
  const skill = await prisma.skill.findFirst({
    where: {
      id
    },
    include: {
      level: true
    }
  })

  return skill
}

export const getSkillByName = async (name: string) => {
  const skill = await prisma.skill.findFirst({
    where: {
      name
    },
    include: {
      level: true
    }
  })

  return skill
}

export const create = async (
  skillData: Prisma.SkillCreateInput
): Promise<Skill | null> => {
  const savedSkill = await prisma.skill.create({
    data: {
      name: skillData.name,
      site: skillData.site,
      ext: skillData.ext,
      tipo: skillData.tipo,
      //@ts-ignore
      level: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: skillData.level
        }
      }
    }
  })

  if (savedSkill) {
    return savedSkill
  }
  return null
}

export const update = async (
  id: string,
  skillData: Prisma.SkillUpdateInput
): Promise<Skill | null> => {
  const savedSkill = await prisma.skill.update({
    data: {
      name: skillData.name,
      site: skillData.site,
      ext: skillData.ext,
      tipo: skillData.tipo,
      //@ts-ignore
      level: {
        //@ts-ignore
        connect: {
          //@ts-ignore
          id: skillData.level
        }
      }
    },
    where: {
      id
    }
  })

  if (savedSkill) {
    return savedSkill
  }
  return null
}

export const remove = async (id: string): Promise<Skill | null> => {
  const savedSkill = await prisma.skill.delete({
    where: {
      id
    }
  })
  if (savedSkill) {
    return savedSkill
  }
  return null
}
