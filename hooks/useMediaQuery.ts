import { useCallback, useEffect, useMemo } from "react"
import { useMount } from "react-use"
import { useSetAtom } from "jotai"

import { breakpointAtom } from "states/ui"
import { breakpoints, Breakpoint } from "styles/constants/breakpoints"

const bpEntries = Object.entries(breakpoints)
const bpLength = bpEntries.length
const bpKeys = Object.keys(breakpoints) as Breakpoint[]
const bpQueries = Object.values(breakpoints).map((value, i) => {
  if (i === bpLength - 1) return `(min-width: ${value}px)`

  const maxWidth = bpEntries[i + 1][1] - 1
  if (i === 0) return `(max-width: ${maxWidth}px)`
  return `(min-width: ${value}px) and (max-width: ${maxWidth}px)`
})

export function useMediaQuery() {
  const setBreakpoint = useSetAtom(breakpointAtom)

  const mql = useMemo(
    () =>
      bpQueries.map((query) => {
        if (typeof window === "undefined") return null
        return window.matchMedia(query)
      }),
    []
  )

  const update = useCallback(() => {
    const match = mql.findIndex((mq) => !!mq?.matches)
    if (match < 0) return
    const newBp = bpKeys[match]
    setBreakpoint(newBp)
  }, [])

  useMount(update)

  useEffect(() => {
    mql.forEach((mq) => mq?.addEventListener("change", update))

    return () => {
      mql.forEach((mq) => mq?.removeEventListener("change", update))
    }
  }, [])
}
