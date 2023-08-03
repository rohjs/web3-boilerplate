import { ChainId } from '../chains'
import type { ChainMap } from '../types'

export const CONTRACT_ADDRESS: ChainMap<Hash> = {
  [ChainId.BSC]: '0x3874d012886c601bc413c1d487bc9033c4b82301',
  [ChainId.BSC_TESTNET]: '0xe420d50b6a69ae128c1b6d8df301ea5e5fbb7ba6',
}

export const WNCG_ADDRESS: ChainMap<Hash> = {
  [ChainId.BSC]: '0x52242cbab41e290e9e17ccc50cc437bb60020a9d',
  [ChainId.BSC_TESTNET]: '0xb43475a1faecc6c578df69fb8703d0ac1531df48',
}

export const NATIVE_CURRENCY_ADDRESS: Hash =
  '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'

export const MULTICALL_3_ADDRESS: Hash =
  '0xca11bde05977b3631167028862be2a173976ca11'
