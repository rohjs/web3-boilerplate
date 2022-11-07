import { PropsWithChildren, useRef } from "react"
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query"

import WagmiProvider from "lib/wagmi/Provider"

type ProviderProps = PropsWithChildren & {
  state: DehydratedState
}

export default function Provider({ children, state }: ProviderProps) {
  const queryClient = useRef(new QueryClient())

  return (
    <QueryClientProvider client={queryClient.current}>
      <Hydrate state={state}>
        <WagmiProvider>{children}</WagmiProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}
