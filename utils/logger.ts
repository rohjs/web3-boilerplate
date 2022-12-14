type LoggerHeart =
  | "white"
  | "blue"
  | "green"
  | "purple"
  | "yellow"
  | "orange"
  | "brown"
  | "black"

export function createLogger(color?: LoggerHeart) {
  return function (value: string, error?: any, ...args: any) {
    if (process.env.NODE_ENV !== "development") return

    if (!!error) {
      console.error(`Unable to fetch ${value}`, error, args)
      return
    }
    console.log(`${heart(color)} Fetching ${value}...`)
  }
}

function heart(color?: LoggerHeart) {
  switch (color) {
    case "white":
      return "๐ค"
    case "blue":
      return "๐"
    case "green":
      return "๐"
    case "purple":
      return "๐"
    case "yellow":
      return "๐"
    case "orange":
      return "๐งก"
    case "brown":
      return "๐ค"
    case "black":
      return "๐ค"
    default:
      return "๐ค"
  }
}
