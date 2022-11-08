import type { MouseEvent } from "react"
import { useConnect } from "wagmi"

import { createWallets } from "lib/wagmi/wallets"

import { StyledConnectWallets } from "./styled"
import Button from "components/Button"

export function ConnectWallets() {
  const { connect, connectors } = useConnect({})

  const wallets = createWallets(connect)

  function handleConnect(e: MouseEvent) {
    e.preventDefault()
    const match = connectors.find(
      (connector) =>
        connector.id === (e.currentTarget as HTMLButtonElement).value
    )

    connect({ connector: match })
  }

  return (
    <StyledConnectWallets>
      <h1>Connect wallet</h1>

      <ul>
        {wallets.map((wallet) => (
          <li key={`${wallet.id}.${wallet.title}`}>
            <Button
              type="button"
              onClick={handleConnect}
              value={wallet.connectorId}
              $size="md"
            >
              Connect {wallet.title}
            </Button>
          </li>
        ))}
      </ul>
    </StyledConnectWallets>
  )
}
