'use client'

import { PropsWithChildren } from 'react'
import { WagmiConfig } from 'wagmi'

import wagmiConfig from 'lib/wagmi/config'

export default function WagmiProvider({ children }: PropsWithChildren) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}
