import config from 'config'
import { CHAINS } from 'config/chains'

export function txUrlFor(hash?: string) {
  const currentChain = CHAINS[config.chainId]

  if (!currentChain || !hash) return ''
  return `${currentChain.explorer}/tx/${hash}`
}
