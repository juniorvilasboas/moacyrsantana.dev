import useSWR from 'swr'

//@ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export const useGet = (url?: string) => {
  return useSWR(url, fetcher)
}
