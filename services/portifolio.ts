import { Portifolio, Prisma } from '@prisma/client'
import prisma from '../lib/prisma'

export const getPortifolio = async () => {
  const portifolios = await prisma.portifolio.findMany({
    orderBy: {
      category: 'desc'
    },
    include: {
      skills: true
    }
  })

  return portifolios
}

export const getPortifolioById = async (id: string) => {
  const portifolio = await prisma.portifolio.findFirst({
    where: {
      id
    },
    include: {
      skills: true
    }
  })

  return portifolio
}

export const create = async (
  portifolioData: Prisma.PortifolioCreateInput
): Promise<Portifolio | null> => {
  const savedPortifolio = await prisma.portifolio.create({
    data: {
      layout: portifolioData.layout,
      name: portifolioData.name,
      category: portifolioData.category,
      description: portifolioData.description,
      site: portifolioData.site,
      skills: {
        //@ts-ignore
        connect: {
          id: portifolioData.skills
        }
      }
    }
  })

  if (savedPortifolio) {
    return savedPortifolio
  }
  return null
}

export const update = async (
  id: string,
  portifolioData: Prisma.PortifolioUpdateInput
): Promise<Portifolio | null> => {
  const savedPortifolio = await prisma.portifolio.update({
    data: {
      layout: portifolioData.layout,
      name: portifolioData.name,
      category: portifolioData.category,
      description: portifolioData.description,
      site: portifolioData.site,
      skills: {
        //@ts-ignore
        connect: {
          id: portifolioData.skills
        }
      }
    },
    where: {
      id
    }
  })

  if (savedPortifolio) {
    return savedPortifolio
  }
  return null
}

export const remove = async (id: string): Promise<Portifolio | null> => {
  const savedPortifolio = await prisma.portifolio.delete({
    where: {
      id
    }
  })
  if (savedPortifolio) {
    return savedPortifolio
  }
  return null
}
