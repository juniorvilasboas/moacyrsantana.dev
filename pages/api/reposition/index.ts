import { NextApiRequest, NextApiResponse } from 'next'
import reposition from 'services/reposition'

const apiGetUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await reposition('juniorvilasboas')
  res.send(data)
}

export default apiGetUser
