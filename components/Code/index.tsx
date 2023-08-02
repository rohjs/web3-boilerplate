import type { CSSProperties } from 'react'

import config from 'config'
import { StyledCode } from './styled'

type CodeProps = {
  bottom?: number | string
  data?: any
  left?: number | string
  maxWidth?: number | string
  right?: number | string
  style?: CSSProperties
  z?: number
  top?: number | string
}

export default function Code({
  bottom,
  data,
  left,
  maxWidth = 200,
  z = 1000,
  right,
  style = {},
  top,
}: CodeProps) {
  if (config.env === 'production') return null

  style = { ...style, top, right, bottom, left, maxWidth, zIndex: z }

  let source = JSON.stringify(data, null, 2)
  if (typeof data === 'undefined') source = 'undefined'

  return (
    <StyledCode style={style}>
      <code>{source}</code>
    </StyledCode>
  )
}
