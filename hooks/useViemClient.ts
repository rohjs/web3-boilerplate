import { useMemo } from 'react'
import { createPublicClient, http } from 'viem'
import { bsc, bscTestnet } from 'viem/chains'

import { ChainId } from 'config/chains'
import { assertUnreachable } from 'utils/assertUnreachable'
import { useChain } from './useChain'

export function useViemClient() {
  const { chainId } = useChain()

  const chain = useMemo(() => {
    switch (chainId) {
      case ChainId.BSC:
        return bsc
      case ChainId.BSC_TESTNET:
        return bscTestnet
      default:
        assertUnreachable(chainId)
    }
  }, [chainId])

  const client = useMemo(() => {
    return createPublicClient({
      chain,
      transport: http(),
    })
  }, [chain])

  return client
}
