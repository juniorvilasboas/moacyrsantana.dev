import { User, Prisma } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
import { create, getUser, getIdUser } from 'services/user'
import bcrypt from 'bcrypt'

const User = async (req: NextApiRequest, res: NextApiResponse<User | null>) => {
  if (req.method === 'POST') {
    const user: Prisma.UserCreateInput = { ...req.body }

    user.password = await bcrypt.hash(user.password, 0)

    user.image = '/images/user/foto.jpg'
    const savedUser = await create(user)

    return res.send(savedUser)
  }

  if (req.query.id === 'count') {
    const user = await getIdUser()

    //@ts-ignore
    return res.send(user)
  }

  const user = await getUser()

  //@ts-ignore
  return res.send(user)
}

export default User
