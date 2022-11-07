export type Breakpoint = keyof typeof breakpoints

export const breakpoints = {
  mobile: 0,
  tablet: 800,
  laptop: 1280,
  desktop: 1400,
}
