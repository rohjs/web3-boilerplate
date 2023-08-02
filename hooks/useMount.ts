import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export function useMount(fn: any) {
  useIsomorphicLayoutEffect(fn, [])
}
