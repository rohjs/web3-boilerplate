'use client'

import { PropsWithChildren, useRef } from 'react'
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import memoize from 'memoize-one'

const createQueryClient = memoize(() => new QueryClient())
const queryClientInstance = createQueryClient()

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const queryClient = useRef(queryClientInstance)
  const dehydratedState = dehydrate(queryClient.current)

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
