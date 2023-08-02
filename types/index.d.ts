type Breakpoint = import('config/constants').Breakpoint

type Chain = import('wagmi').Chain

type ChainId = import('config/chains').ChainId

type ChainConfig = {
  id: ChainId
  network: string
  assetPlatform: string
  chainId: number
  chainName: string
  explorer: string
  explorerName: string
  name: string
  nativeCurrency: {
    address: Hash
    coingeckoId: string
    decimals: number
    name: string
    symbol: string
    wrappedTokenAddress: Hash
  }
  rpcUrl: string
  rpcUrls: {
    [key: string]: RpcUrls
    default: RpcUrls
    public: RpcUrls
  }
  shortName: string
  subgraph?: string
}

type Hash = `0x${string}`

type ModalType = import('config/constants').ModalType

type TokenInfo = {
  readonly address: Hash
  readonly decimals: name
  readonly name: string
  readonly symbol: string
}
