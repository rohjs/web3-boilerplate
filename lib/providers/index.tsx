import { PropsWithChildren } from 'react'

import ReactQueryProvider from './react-query-provider'
import WagmiProvider from './wagmi-provider'

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ReactQueryProvider>
      <WagmiProvider>{children}</WagmiProvider>
    </ReactQueryProvider>
  )
}
