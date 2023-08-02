import { removeTrailingZero } from './removeTrailingZero'

export function fixDecimals(
  value: string | number,
  maxDecimals: number,
  allowTrailingZeros = false
) {
  value = removeTrailingZero(value)

  const float = value.split('.')?.[1]?.length ?? 0

  if (allowTrailingZeros) {
    return Math.max(float, maxDecimals)
  }

  return Math.min(float, maxDecimals)
}
