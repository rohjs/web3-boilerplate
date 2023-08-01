import { PropsWithChildren } from 'react'

import ReactQueryProvider from './react-query-provider'
import WagmiProvider from './wagmi-provider'
import JotaiProvider from './jotai-provider'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      {/* @ts-ignore */}
      <JotaiProvider>
        <WagmiProvider>{children}</WagmiProvider>
      </JotaiProvider>
    </ReactQueryProvider>
  )
}
