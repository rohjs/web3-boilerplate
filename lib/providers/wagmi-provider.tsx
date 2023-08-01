'use client'

import { PropsWithChildren } from 'react'
import { WagmiConfig } from 'wagmi'

import config from 'lib/wagmi/config'

export default function WagmiProvider({ children }: PropsWithChildren) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
