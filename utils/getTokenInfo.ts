import { DEFAULT_TOKEN_INFO, TOKENS } from "config/tokens"

export function getTokenInfo(address?: string) {
  if (!address) return DEFAULT_TOKEN_INFO
  return TOKENS.TokenInfo[address.toLowerCase()] || DEFAULT_TOKEN_INFO
}
