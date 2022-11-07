import type { UseConnectArgs } from "wagmi/dist/declarations/src/hooks/accounts/useConnect"

export type NetworkConfig = {
  key: string
  chainId: number
  chainName: string
  name: string
  shortName: string
  network: string
  explorer: string
  explorerName: string
  subgraph?: string
  nativeCurrency: {
    name: string
    address: string
    symbol: string
    decimals: number
    deeplinkId?: string
    logoURI?: string
    minTransactionBuffer?: string
  }
  addresses: Record<string, string>
}

export type EthereumTokenConstants = {
  Addresses: {
    nativeCurrency: string
    WETH: string
    BAL: string
  }
  PriceChainMap: Record<string, string>
  TokenInfo: {
    [address: string]: TokenInfo
  }
}

export type BscTokenConstants = {
  Addresses: {
    nativeCurrency: string
    WBNB: string
  }
  PriceChainMap: Record<string, string>
  TokenInfo: {
    [address: string]: TokenInfo
  }
}

export type TokenConstants = EthereumTokenConstants | BscTokenConstants

export type TokenInfo = {
  readonly address: string
  readonly name: string
  readonly decimals: number
  readonly symbol: string
}

export type WalletLink = string | { text: string; url: string }

export type WalletDeviceLink = {
  desktop?: WalletLink
  mobile?: WalletLink
}

export type ConnectFn = (args?: Partial<UseConnectArgs>) => void

export type WalletConfig<T> = {
  id: string
  title: string
  // icon: string | FC<PropsWithChildren>
  connectorId: T
  deepLink?: string
  guide?: WalletLink | WalletDeviceLink
  downloadLink?: WalletLink | WalletDeviceLink
  qrCode?: () => Promise<string>
}
