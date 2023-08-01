// TODO: Update config

class ConfigService {
  get assetPlatform() {
    return process.env.NEXT_PUBLIC_ASSET_PLATFORM ?? 'ethereum'
  }

  get appName() {
    return `Mini Game`
  }

  get appDescription() {
    return `Mini Game!`
  }

  get baseUrl() {
    return process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
  }

  get domain() {
    return process.env.NEXT_PUBLIC_DOMAIN ?? ''
  }

  get env() {
    return process.env.NODE_ENV ?? 'development'
  }

  get googleTagManager() {
    return process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER || null
  }

  get discordUrl() {
    return 'https://discord.gg/planetarium'
  }

  get twitterUrl() {
    return 'https://twitter.com/NineChronicles'
  }

  get walletConnectProjectId() {
    return process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || null
  }
}

const config = new ConfigService()

export default config
