import {User, Prisma} from '@prisma/client'
import prisma from '../lib/prisma'

export const getUser = async() => {
    const user = await prisma.user.findFirst()

    return user
}

export const getIdUser = async() => {
    const user = await prisma.user.aggregate({
        _count: {
            id: true
        }
    })
    
    return user
}

export const getUserById = async(id: string) => {
    const user = await prisma.user.findFirst({
        where: {
            id
        }
    })

    return user
}

export const create = async(userData: Prisma.UserCreateInput):Promise<User | null> => {
    const savedUser = await prisma.user.create({
        data: userData
    })

    if (savedUser)
        return savedUser

    return null
}