import { NextApiRequest, NextApiResponse } from 'next'
import getUser from '../../../utils/getUser'

const apiGetUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await getUser('juniorvilasboas')
  res.send(data)
}

export default apiGetUser
