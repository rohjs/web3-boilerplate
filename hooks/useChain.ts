import { useMemo } from 'react'
import { useNetwork } from 'wagmi'

import config from 'config'
import { CHAINS } from 'config/chains'
import { CONTRACT_ADDRESS, WNCG_ADDRESS } from 'config/constants/addresses'

export function useChain() {
  const { chain: currentChain } = useNetwork()
  const { chainId } = config

  const networkMismatch = useMemo(
    () => config.chainId !== currentChain?.id,
    [currentChain?.id]
  )

  const chain = CHAINS[config.chainId]
  const contractAddress = CONTRACT_ADDRESS[chainId]
  const wncgAddress = WNCG_ADDRESS[chainId]

  return {
    ...chain,
    contractAddress,
    currentChain,
    networkMismatch,
    wncgAddress,
  }
}
