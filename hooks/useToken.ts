import { useMemo } from 'react'

import config from 'config'
import { TOKENS } from 'config/constants/tokens'

export function useToken() {
  const tokenMap = useMemo(() => TOKENS[config.chainId], [])

  return tokenMap
}
