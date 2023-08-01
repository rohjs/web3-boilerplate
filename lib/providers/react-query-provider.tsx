'use client'

import {
  Children,
  PropsWithChildren,
  cloneElement,
  useCallback,
  useRef,
} from 'react'
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

  const renderChildren = useCallback(() => {
    return Children.map(children, (child) => {
      // @ts-ignore
      return cloneElement(child, {
        queryClient,
      })
    })
  }, [children])

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={dehydratedState}>{renderChildren()}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
