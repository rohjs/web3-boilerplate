import { atomWithReset } from 'jotai/utils'
import type { Connector } from '@wagmi/core'

export const accountAtom = atomWithReset<Hash | null>(null)
export const connectorAtom = atomWithReset<Connector | null>(null)
export const statusAtom = atomWithReset<ConnectionStatus | null>(null)
