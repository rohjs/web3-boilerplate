import { useContext } from "react"

import { Web3LibraryContext } from "lib/wagmi/Provider"

export function useWeb3() {
  return useContext(Web3LibraryContext)
}
