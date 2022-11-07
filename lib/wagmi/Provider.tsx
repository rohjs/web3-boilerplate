import { createContext, PropsWithChildren } from "react"
import { useQuery } from "@tanstack/react-query"
import { Web3Provider } from "@ethersproject/providers"
import { WagmiConfig } from "wagmi"

import { useAccount, useNetwork } from "hooks"
import { client } from "./client"

export const Web3LibraryContext = createContext<Web3Provider | null>(null)

function Web3LibraryProvider(props: PropsWithChildren) {
  const { connector } = useAccount()
  const { chain } = useNetwork()
  const { data } = useQuery(
    [connector?.id ?? "", chain?.id ?? ""],
    async () => {
      const provider = await connector?.getProvider()
      try {
        return new Web3Provider(provider)
      } catch {
        return null
      }
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  )

  return (
    <Web3LibraryContext.Provider value={data ?? null}>
      {props.children}
    </Web3LibraryContext.Provider>
  )
}

export default function WagmiProvider(props: PropsWithChildren) {
  return (
    <WagmiConfig client={client}>
      <Web3LibraryProvider>{props.children}</Web3LibraryProvider>
    </WagmiConfig>
  )
}
