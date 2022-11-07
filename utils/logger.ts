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
      return "🤍"
    case "blue":
      return "💙"
    case "green":
      return "💚"
    case "purple":
      return "💜"
    case "yellow":
      return "💛"
    case "orange":
      return "🧡"
    case "brown":
      return "🤎"
    case "black":
      return "🖤"
    default:
      return "🖤"
  }
}
