type BigNumber = import('bignumber.js')

type Breakpoint = import('config/constants').Breakpoint

type ButtonSize = import('components/Button').ButtonSize

type ButtonVariant = import('components/Button').ButtonVariant

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

type ConnectorIconType = import('components/Icons/types').ConnectorIconType

type Hash = `0x${string}`

type IconType = import('components/Icons/types').IconType

type IconSize = import('components/Icons/types').IconSize

type LogoIconType = import('components/Icons/types').LogoIconType

type Modal = {
  type: ModalType
  props?: any
}

type ModalType = import('config/constants').ModalType

type NumericValueType = 'token' | 'fiat' | 'percent'

type TokenInfo = {
  readonly address: Hash
  readonly decimals: name
  readonly name: string
  readonly symbol: string
}
