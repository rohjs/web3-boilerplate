import type { Chain } from "wagmi"
export { goerli, mainnet } from "wagmi/chains"

const bscExplorer = {
  name: "BscScan",
  url: "https://bscscan.com",
}

export const bsc: Chain = {
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  rpcUrls: {
    default: "https://bsc-dataseed1.binance.org",
    public: "https://bsc-dataseed1.binance.org",
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    decimals: 18,
    name: "Binance Chain Native Token",
    symbol: "BNB",
  },
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 15921452,
  },
}

export const bscTest: Chain = {
  id: 97,
  name: "BNB Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Binance Chain Native Token",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: "https://data-seed-prebsc-1-s2.binance.org:8545/",
    public: "https://data-seed-prebsc-1-s2.binance.org:8545/",
  },
  blockExplorers: {
    default: { name: "BscScan", url: "https://testnet.bscscan.com" },
  },
  multicall: {
    address: "0xcA11bde05977b3631167028862bE2a173976CA11",
    blockCreated: 17422483,
  },
  testnet: true,
}
