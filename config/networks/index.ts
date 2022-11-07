import { Network } from "config/enums"
import { NetworkConfig } from "config/types"

import goerli from "./goerli.json"
import homestead from "./homestead.json"
import bsc from "./bsc.json"
import bscTestnet from "./bsc_testnet.json"

const networkConfigs: Record<Network, NetworkConfig> = {
  [Network.MAINNET]: homestead,
  [Network.GOERLI]: goerli,
  [Network.BSC]: bsc,
  [Network.BSC_TESTNET]: bscTestnet,
}

export const networkId = Network.BSC_TESTNET // 97

export default networkConfigs
