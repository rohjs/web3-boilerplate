import type { NextPage } from "next"

import { useAccount } from "hooks"

import { StyledHomePage } from "components/home/styled"
import { Account } from "components/home/Account"
import { ConnectWallets } from "components/home/ConnectWallets"

const HomePage: NextPage = () => {
  const { isConnected } = useAccount()

  return (
    <StyledHomePage>
      {isConnected ? <Account /> : <ConnectWallets />}
    </StyledHomePage>
  )
}

export default HomePage
