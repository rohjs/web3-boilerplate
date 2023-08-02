import config from 'config'
import { CHAINS } from 'config/chains'

export function explorerUrlFor(address?: string): string {
  const currentChain = CHAINS[config.chainId]

  if (!currentChain || !address) return ''
  return `${currentChain.explorer}/address/${address}`
}
