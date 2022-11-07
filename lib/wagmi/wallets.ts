import { ConnectorNames } from "config/enums"
import { networkId } from "config/networks"
import { ConnectFn, WalletConfig } from "config/types"
import { walletConnectNoQrCodeConnector } from "./connectors"

const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t))

const createQrCode = (chainId: number, connect: ConnectFn) => async () => {
  connect({ chainId, connector: walletConnectNoQrCodeConnector })

  // wait for WalletConnect to setup in order to get the uri
  await delay(100)
  const { uri } = (await walletConnectNoQrCodeConnector.getProvider()).connector

  return uri
}

const walletsConfig = ({
  chainId,
  connect,
}: {
  chainId: number
  connect: ConnectFn
}): WalletConfig<ConnectorNames>[] => {
  const qrCode = createQrCode(chainId, connect)

  return [
    {
      id: "metamask",
      title: "Metamask",
      connectorId: ConnectorNames.MetaMask,
      deepLink: "https://metamask.app.link/dapp/pancakeswap.finance/",
      qrCode,
      downloadLink: "https://metamask.app.link/dapp/pancakeswap.finance/",
    },
    {
      id: "binance",
      title: "Binance Wallet",
      connectorId: ConnectorNames.BSC,
      guide: {
        desktop: "https://www.bnbchain.org/en/binance-wallet",
      },
      downloadLink: {
        desktop:
          "https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp",
      },
    },
    {
      id: "coinbase",
      title: "Coinbase Wallet",
      connectorId: ConnectorNames.CoinbaseWallet,
    },
    {
      id: "trust",
      title: "Trust Wallet",
      connectorId: ConnectorNames.Injected,
      deepLink: "https://link.trustwallet.com/open_url?coin_id=20000714",
      downloadLink: {
        desktop:
          "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph/related",
      },
      qrCode,
    },
    {
      id: "walletconnect",
      title: "WalletConnect",
      connectorId: ConnectorNames.WalletConnect,
    },
  ]
}

export const createWallets = (connect: any, chainId = networkId) => {
  const config = walletsConfig({ chainId, connect })
  const hasInjected =
    typeof window !== "undefined" &&
    !window.ethereum &&
    config.some((c) => c.connectorId === ConnectorNames.Injected)

  return hasInjected
    ? config
    : [
        ...config,
        {
          id: "injected",
          title: "Injected",
          connectorId: ConnectorNames.Injected,
          installed: typeof window !== "undefined" && !!window.ethereum,
        },
      ]
}
