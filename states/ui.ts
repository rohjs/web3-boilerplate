import { atom } from 'jotai'
import { atomWithReset } from 'jotai/utils'

export const breakpointAtom = atom<Breakpoint | null>(null)

export const modalAtom = atomWithReset<Modal | null>(null)
