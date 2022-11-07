import networks from "./networks"
import { Network } from "./enums"

class ConfigService {
  get env() {
    return process.env.NODE_ENV ?? "development"
  }

  get networkId(): Network {
    return Number(process.env.NEXT_PUBLIC_NETWORK_ID) ?? 97
  }

  get network() {
    return networks[this.networkId]
  }

  get github() {
    const repositoryName =
      process.env.NEXT_PUBLIC_GITHUB_REPO ?? "planetarium/launchpad-interface"

    return {
      repositoryName,
      repositoryUrl: `https://github.com/${repositoryName}`,
    }
  }

  get pancakeRouterAddress() {
    return this.network.addresses.pancakeRouter || ""
  }

  get hotbody() {
    return this.network.addresses.hotbody || ""
  }

  get cakeLpAddress() {
    return this.network.addresses.cakeLp || ""
  }

  get wbnb() {
    return this.network.addresses.wbnb || ""
  }
}

const config = new ConfigService()

export default config
