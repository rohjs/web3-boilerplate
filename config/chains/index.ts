import type { ChainMap } from 'config/types'

import _bsc from './56.json'
import _bscTestnet from './97.json'

export const ChainId = {
  BSC: 56,
  BSC_TESTNET: 97,
} as const

export type ChainId = (typeof ChainId)[keyof typeof ChainId]

const bsc = _bsc as ChainConfig
const bscTestnet = _bscTestnet as ChainConfig

export const CHAINS: ChainMap<ChainConfig> = {
  [ChainId.BSC]: bsc,
  [ChainId.BSC_TESTNET]: bscTestnet,
}
