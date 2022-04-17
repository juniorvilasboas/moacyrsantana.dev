export const post = async ({ url, data }) => {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
  return res.json()
}

export const patch = async ({ url, data }) => {
  const res = await fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }
  })
  return res.json()
}

export const remove = async ({ url }) => {
  const data = await fetch(url, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
  return data.json()
}
