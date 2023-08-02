'use client'

import wagmiConfig from 'lib/wagmi/config'
import { useAccount, useMediaQuery, useMount } from 'hooks'

export default function Effects() {
  useAccount()
  useMediaQuery()

  useMount(() => {
    wagmiConfig.autoConnect()
  })

  return null
}
