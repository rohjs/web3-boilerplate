declare type Ethereum = import("@wagmi/core").Ethereum

declare type ExtendedEthereum = {
  isSafePal?: true
  isCoin98?: true
  isBlocto?: true
  isMathWallet?: true
  isTrustWallet?: true
  isBlocto?: true
} & Ethereum

declare global {
  interface Window {
    dataLayer?: Array<any>
    ethereum?: ExtendedEthereum
    BinanceChain?: {
      bnbSign?: (
        address: string,
        message: string
      ) => Promise<{ publicKey: string; signature: string }>
      switchNetwork?: (networkId: string) => Promise<string>
    } & Ethereum
    gtag?: any
  }
}
