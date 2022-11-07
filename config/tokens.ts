import config from "."
import networks from "config/networks"
import { Network } from "./enums"
import {
  BscTokenConstants,
  EthereumTokenConstants,
  TokenConstants,
  TokenInfo,
} from "./types"

export const DEFAULT_TOKEN_DECIMALS = 18

export const DEFAULT_TOKEN_INFO: TokenInfo = {
  address: "",
  name: "",
  decimals: DEFAULT_TOKEN_DECIMALS,
  symbol: "",
}

const homesteadNetwork = networks[Network.MAINNET]

export const TOKENS_MAINNET: EthereumTokenConstants = {
  Addresses: {
    nativeCurrency: homesteadNetwork.nativeCurrency.address,
    WETH: homesteadNetwork.addresses.weth,
    BAL: homesteadNetwork.addresses.bal,
  },
  PriceChainMap: {
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2":
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH
    "0xba100000625a3754423978a60c9317c58a424e3d":
      "0xba100000625a3754423978a60c9317c58a424e3d", // BAL
    "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817":
      "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817", // WNCG
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599":
      "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // WBTC
  },
  TokenInfo: {
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      name: "Ether",
      decimals: 18,
      symbol: "ETH",
    },
    "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2": {
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      name: "Wrapped Ether",
      decimals: 18,
      symbol: "WETH",
    },
    "0xba100000625a3754423978a60c9317c58a424e3d": {
      address: "0xba100000625a3754423978a60c9317c58a424e3d",
      name: "Balancer",
      decimals: 18,
      symbol: "BAL",
    },
    "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817": {
      address: "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817",
      name: "Wrapped NCG",
      decimals: 18,
      symbol: "WNCG",
    },
    "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": {
      address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      name: "Wrapped Bitcoin",
      decimals: 8,
      symbol: "WBTC",
    },
    "0xe8cc7e765647625b95f59c15848379d10b9ab4af": {
      address: "0xe8cc7e765647625b95f59c15848379d10b9ab4af",
      name: "Balancer 20 WETH 80 WNCG",
      decimals: 18,
      symbol: "20WETH-80WNCG",
    },
  },
}

const goerliNetwork = networks[Network.GOERLI]

export const TOKENS_GOERLI: EthereumTokenConstants = {
  Addresses: {
    nativeCurrency: goerliNetwork.nativeCurrency.address,
    WETH: goerliNetwork.addresses.weth,
    BAL: goerliNetwork.addresses.bal,
  },
  PriceChainMap: {
    /**
     * Addresses must be lower case and map from goerli to mainnet, e.g
     * [goerli address]: mainnet address
     */
    "0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1":
      "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH
    "0xfa8449189744799ad2ace7e0ebac8bb7575eff47":
      "0xba100000625a3754423978a60c9317c58a424e3d", // BAL
    "0xa488533be3018a0720c4c0647f407f3b41e6cb82":
      "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817", // WNCG (HOTBODY)
    "0x37f03a12241e9fd3658ad6777d289c3fb8512bc9":
      "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // WBTC
  },
  TokenInfo: {
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      name: "Ether",
      decimals: 18,
      symbol: "ETH",
    },
    "0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1": {
      address: "0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1",
      name: "Wrapped Ether",
      decimals: 18,
      symbol: "WETH",
    },
    "0xfa8449189744799ad2ace7e0ebac8bb7575eff47": {
      address: "0xfa8449189744799ad2ace7e0ebac8bb7575eff47",
      name: "Balancer",
      decimals: 18,
      symbol: "BAL",
    },
    "0xa488533be3018a0720c4c0647f407f3b41e6cb82": {
      address: "0xa488533be3018a0720c4c0647f407f3b41e6cb82",
      name: "Hotbody",
      decimals: 18,
      symbol: "HOTBODY",
    },
    "0x37f03a12241e9fd3658ad6777d289c3fb8512bc9": {
      address: "0x37f03a12241e9fd3658ad6777d289c3fb8512bc9",
      name: "Wrapped Bitcoin",
      decimals: 8,
      symbol: "WBTC",
    },
    "0x16faf9f73748013155b7bc116a3008b57332d1e6": {
      address: "0x16faf9f73748013155b7bc116a3008b57332d1e6",
      name: "Balancer 50 WBTC 50 WETH",
      decimals: 18,
      symbol: "B-50WBTC-50WETH",
    },
  },
}

export const TOKENS_BSC: BscTokenConstants = {
  Addresses: {
    nativeCurrency: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    WBNB: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
  },
  PriceChainMap: {
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c":
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // WBNB
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82":
      "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", // CAKE
    "0xa488533be3018a0720c4c0647f407f3b41e6cb82":
      "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817", // WNCG (HOTBODY)
  },
  TokenInfo: {
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      name: "BNB",
      decimals: 18,
      symbol: "BNB",
    },
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
      address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      name: "Wrapped BNB",
      decimals: 18,
      symbol: "WBNB",
    },
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": {
      address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      name: "PancakeSwap Token",
      decimals: 18,
      symbol: "Cake",
    },
  },
}

export const TOKENS_BSC_TESTNET: BscTokenConstants = {
  Addresses: {
    nativeCurrency: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    WBNB: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  },
  PriceChainMap: {
    "0xae13d989dac2f0debff460ac112a837c89baa7cd":
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", // WBNB
    "0xa1f92046c84bf0067cd2c7acdade986ec81fc0d6":
      "0xf203ca1769ca8e9e8fe1da9d147db68b6c919817", // HOTBODY
  },
  TokenInfo: {
    "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee": {
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      name: "BNB",
      decimals: 18,
      symbol: "BNB",
    },
    "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c": {
      address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      name: "Wrapped BNB",
      decimals: 18,
      symbol: "WBNB",
    },
    "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": {
      address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      name: "PancakeSwap Token",
      decimals: 18,
      symbol: "Cake",
    },
  },
}

const TOKENS_MAP: Partial<Record<Network, TokenConstants>> = {
  [Network.GOERLI]: TOKENS_GOERLI,
  [Network.MAINNET]: TOKENS_MAINNET,
  [Network.BSC]: TOKENS_BSC,
  [Network.BSC_TESTNET]: TOKENS_BSC_TESTNET,
}

const TOKENS_PLACEHOLDER: TokenConstants = {
  Addresses: {
    nativeCurrency: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    WETH: "0x0000000000000000000000000000000000000000",
    BAL: "0x0000000000000000000000000000000000000000",
  },
  PriceChainMap: {},
  TokenInfo: {},
}

export const TOKENS: TokenConstants =
  TOKENS_MAP[config.networkId as Network] || TOKENS_PLACEHOLDER

export const TOKEN_PRICES_PLACEHOLDERS = Object.fromEntries(
  Object.keys(TOKENS.PriceChainMap || {}).map((key) => [key, "0"])
)

export const POOL_DECIMALS = 18
