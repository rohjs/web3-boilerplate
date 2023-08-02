export const Breakpoint = {
  mobile: 0,
  tablet: 800,
  smLaptop: 1080,
  laptop: 1366,
  desktop: 1600,
  wide: 1920,
} as const

export type Breakpoint = keyof typeof Breakpoint

export const ConnectorId = {
  Binance: 'bsc',
  CoinbaseWallet: 'coinbaseWallet',
  TrustWallet: 'trustWallet',
  MetaMask: 'metaMask',
  WalletConnect: 'walletConnect',
  Injected: 'injected',
} as const

export type ConnectorId = (typeof ConnectorId)[keyof typeof ConnectorId]

export const ModalType = {
  Connect: 'Connect',
} as const

export type ModalType = (typeof ModalType)[keyof typeof ModalType]
