import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from 'next'

const User = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })

  if (session) {
    const userId = String(req.query.userId)

    if (req.method === 'DELETE') {
      const user = await prisma.user.findFirst({
        where: {
          id: userId
        }
      })

      if (!user) {
        return res.send({
          message: 'You need to be auth'
        })
      }

      await prisma.user.delete({
        where: {
          id: userId
        }
      })
    }

    const user = await prisma.user.findFirst({
      where: {
        id: userId
      }
    })
    res.send(user)
  } else {
    res.send(null)
  }
}

export default User
