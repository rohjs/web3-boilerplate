'use client'

import { PropsWithChildren, useRef } from 'react'
import {
  dehydrate,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function ReactQueryProvider({ children }: PropsWithChildren) {
  const queryClient = useRef(new QueryClient())
  const dehydratedState = dehydrate(queryClient.current)

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
