'use client'

import type { PropsWithChildren } from 'react'
import { Provider } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
import { queryClientAtom } from 'jotai-tanstack-query'
import { QueryClient } from '@tanstack/react-query'

type JotaiProviderProps = {
  queryClient: QueryClient
} & PropsWithChildren

export default function JotaiProvider({
  children,
  queryClient,
}: JotaiProviderProps) {
  useHydrateAtoms([[queryClientAtom, queryClient]])

  return <Provider>{children}</Provider>
}
