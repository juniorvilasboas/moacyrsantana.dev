interface IPost {
  url: string
  data: any
}

export const post = async ({ url, data }: IPost) => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
  return res.json()
}

export const patch = async ({ url, data }: IPost) => {
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
  return res.json()
}

interface IDelete {
  url: string
}
export const remove = async ({ url }: IDelete) => {
  const data = await fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
  return data.json()
}
