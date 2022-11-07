export function assertUnreachable(value: any): never {
  if (process.env.NODE_ENV === "development") {
    console.log(value)
  }

  throw new Error("Error: Unexpected value received: ", value)
}
