type Abi = import('abitype').Abi

type AbiFunction = import('abitype').AbiFunction

type AbiError = import('abitype').AbiError

type AbiEvent = import('abitype').AbiEvent

type AbiStateMutability = import('abitype').AbiStateMutability

type Chain = import('wagmi').Chain

type RoundingMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

type RpcUrls = {
  http: readonly string[]
  webSocket?: readonly string[]
}

type XstateSend = (event: string) => void
