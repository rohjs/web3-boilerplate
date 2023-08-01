type WindowProvider = import('wagmi').WindowProvider

type Ethereum = WindowProvider

type ExtendedEthereum = {
  isSafePal?: boolean
  isTrustWallet?: boolean
  isTrust?: boolean
  isMetaMask?: boolean
  isCoinbaseWallet?: boolean
} & Ethereum

type BinanceChain = {
  bnbSign?: (
    address: Hash,
    message: string
  ) => Promise<{ publicKey: string; signature: string }>
  switchNetwork?: (networkId: string) => Promise<string>
} & Ethereum

type TrustWallet = {}

type ConnectArgs = import('@wagmi/core').ConnectArgs

type ConnectionStatus =
  | 'connected'
  | 'reconnecting'
  | 'connecting'
  | 'disconnected'

type ConnectFn = (args?: Partial<ConnectArgs>) => void

type WriteAsyncFn = (
  overrideConfig?: WriteContractArgs<Abi, string>
) => Promise<SendTransactionResult>

type TransactionResponse =
  import('@ethersproject/providers').TransactionResponse

type SendTransactionResult = {
  hash: TransactionResponse['hash']
  wait: TransactionResponse['wait']
}

type FetchBalanceResult = {
  decimals: number
  formatted: string
  symbol: string
  value: BigNumber
}

type TransactionResponse = TransactionResponse

type WriteContractResult = SendTransactionResult

type ContractWriteOption = {
  onConfirm?(hash?: Hash): void
  onError?(error: any): void
}

type WalletLink =
  | string
  | {
      text: string
      url: string
    }

type WalletDeviceLink = {
  desktop?: WalletLink
  mobile?: WalletLink
}

type WalletConfig = {
  id: string
  title: string
  connectorId: ConnectorId
  deepLink?: string
  downloadLink?: string
  guide?: WalletLink | WalletDeviceLink
  installed?: boolean
  qrCode?: () => Promise<string>
}

type NetworkConfig = {
  key: string
  chainId: number
  chainName: string
  name: string
  shortName: string
  network: string
  explorer: string
  explorerName: string
  rpcUrl: string
  subgraph?: string
  platform: string
  nativeCurrency: {
    name: string
    address: Hash
    symbol: string
    decimals: number
    coingecko: {
      platformId: string
      id: string
    }
    deeplinkId?: string
    logoURI?: string
    minTransactionBuffer?: string
  }
  addresses: Record<string, Hash>
}

type BalanceMap = {
  [address: Hash]: string
}

type Narrow<TType> =
  | (TType extends Function ? TType : never)
  | (TType extends string | number | boolean | bigint ? TType : never)
  | (TType extends [] ? [] : never)
  | {
      [K in keyof TType]: Narrow<TType[K]>
    }

type ReadContractResult<T> =
  | {
      error: Error
      result?: undefined
      status: 'failure'
    }
  | {
      error?: undefined
      result: T
      status: 'success'
    }
