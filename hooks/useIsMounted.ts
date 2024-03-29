'use client'

import { useState } from 'react'

import { useMount } from './useMount'

export function useIsMounted() {
  const [mounted, setIsMounted] = useState(false)

  useMount(() => setIsMounted(true))

  return mounted
}
