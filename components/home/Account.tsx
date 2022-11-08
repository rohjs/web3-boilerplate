import { useDisconnect } from "wagmi"

import { truncateAddress } from "utils/truncateAddress"
import { useAccount } from "hooks"

import { StyledAccount } from "./styled"
import Button from "components/Button"
import Jazzicon from "components/Jazzicon"

export function Account() {
  const { account, connector } = useAccount()

  const { disconnect: initDisconnect } = useDisconnect()

  function disconnect() {
    initDisconnect()
  }

  return (
    <StyledAccount>
      <h2 className="title">Connected w/ {connector?.name}:</h2>

      <div className="account">
        <Jazzicon address={account} diameter={40} />
        <strong>{truncateAddress(account)}</strong>
      </div>

      <Button onClick={disconnect} $variant="tiny">
        Disconnect
      </Button>
    </StyledAccount>
  )
}
