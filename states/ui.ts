import { atom } from "jotai"
import { selectAtom } from "jotai/utils"

import type { Breakpoint } from "styles/constants/breakpoints"

export const breakpointAtom = atom<Breakpoint | null>(null)

export const isMobile = selectAtom(breakpointAtom, (bp) => {
  return bp === "mobile"
})

export const isTablet = selectAtom(breakpointAtom, (bp) => {
  return bp === "tablet"
})

export const isDesktop = selectAtom(breakpointAtom, (bp) => {
  return ["laptop", "desktop"].includes(bp as string)
})

export const isHighResolution = selectAtom(breakpointAtom, (bp) => {
  return bp === "desktop"
})
