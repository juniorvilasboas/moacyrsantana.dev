import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const useGet = (url) => {
  return useSWR(url, fetcher)
}
