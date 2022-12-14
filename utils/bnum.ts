import BigNumber from "bignumber.js"

type SanitizeNumberValueOption = {
  allowEmptyString?: boolean
}

export function sanitizeNumber(
  value?: string | number | null,
  options?: SanitizeNumberValueOption
) {
  const { allowEmptyString } = options || {}
  let newValue = value ? String(value) : ""
  newValue = newValue.replace(/,/g, "")

  if (!newValue && !allowEmptyString) {
    newValue = "0"
  }

  return newValue
}

BigNumber.config({ EXPONENTIAL_AT: [-25, 25] })

export function bnum(value: string | number | BigNumber): BigNumber {
  const number =
    typeof value === "string" || typeof value === "number"
      ? sanitizeNumber(value)
      : BigNumber.isBigNumber(value)
      ? value.toString()
      : "0"
  return new BigNumber(number)
}
