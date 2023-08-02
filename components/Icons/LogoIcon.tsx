import { memo } from 'react'
import clsx from 'clsx'

import { assertUnreachable } from 'utils/assertUnreachable'
import { StyledIcon } from './styled'

import BinanceIcon from 'public/icons/ic-binance.svg'
import BnbIcon from 'public/icons/ic-bnb.svg'
import BscIcon from 'public/icons/ic-bsc.svg'
import CoinbaseWalletIcon from 'public/icons/ic-coinbaseWallet.svg'
import EtherIcon from 'public/icons/ic-ether.svg'
import MetaMaskIcon from 'public/icons/ic-metaMask.svg'
import PlanetariumIcon from 'public/icons/ic-planetarium.svg'
import TrustWalletIcon from 'public/icons/ic-trustWallet.svg'
import WalletConnectIcon from 'public/icons/ic-walletConnect.svg'

type LogoIconProps = {
  ariaLabel?: string
  ariaHidden?: boolean
  icon: LogoIconType
  className?: string
  $size?: number
}

function LogoIcon({
  ariaLabel,
  ariaHidden = true,
  icon,
  className,
  $size = 16,
}: LogoIconProps) {
  return (
    <StyledIcon
      className={clsx('cryptoIcon', icon, className)}
      as="span"
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      $size={$size}
    >
      {renderSvgIcon(icon)}
    </StyledIcon>
  )
}

export default memo(LogoIcon)

function renderSvgIcon(icon: LogoIconType) {
  switch (icon) {
    case 'binance':
      return <BinanceIcon />
    case 'bnb':
      return <BnbIcon />
    case 'bsc':
      return <BscIcon />
    case 'coinbaseWallet':
      return <CoinbaseWalletIcon />
    case 'ether':
      return <EtherIcon />
    case 'metaMask':
      return <MetaMaskIcon />
    case 'planetarium':
      return <PlanetariumIcon />
    case 'trustWallet':
      return <TrustWalletIcon />
    case 'walletConnect':
      return <WalletConnectIcon />
    default:
      assertUnreachable(icon)
  }
}
