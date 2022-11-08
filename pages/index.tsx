import type { NextPage } from "next"

import { useAccount } from "hooks"

import { StyledHomePage } from "components/home/styled"
import { Account } from "components/home/Account"
import { ConnectWallets } from "components/home/ConnectWallets"
import { Sample } from "components/home/Sample"

const HomePage: NextPage = () => {
  const { isConnected } = useAccount()

  return (
    <StyledHomePage>
      {isConnected ? <Account /> : <ConnectWallets />}
      {isConnected && <Sample />}
    </StyledHomePage>
  )
}

export default HomePage
