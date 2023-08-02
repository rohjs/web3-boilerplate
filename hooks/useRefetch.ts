import { useCallback } from 'react'

type RefetchOptions = {}

export function useRefetch(options: RefetchOptions = {}) {
  const refetch = useCallback(async () => {}, [])

  return refetch
}
