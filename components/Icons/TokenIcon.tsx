import { memo, useMemo } from 'react'
import clsx from 'clsx'

import { useChain, useToken } from 'hooks'

import { StyledTokenFragment, StyledTokenIcon } from './styled'
import LogoIcon from './LogoIcon'

type TokenFragmentProps = {
  address: Hash
  $size: number
}

function TokenFragment({ address, $size }: TokenFragmentProps) {
  const tokenMap = useToken()
  const { nativeCurrency, wncgAddress } = useChain()
  const token = tokenMap[address]

  const fragment = useMemo(() => {
    if (!token) return <span className="icon defaultIcon" />

    switch (true) {
      case address === nativeCurrency.address.toLowerCase():
      case address === nativeCurrency.wrappedTokenAddress.toLowerCase():
        return <LogoIcon icon="bnb" $size={$size} />
      case address === wncgAddress:
        return <LogoIcon icon="bnb" $size={$size} />
      default:
        return <span className="icon defaultIcon" />
    }
  }, [
    $size,
    address,
    nativeCurrency.address,
    nativeCurrency.wrappedTokenAddress,
    token,
    wncgAddress,
  ])

  return (
    <StyledTokenFragment className="tokenFragment" $size={$size}>
      {fragment}
    </StyledTokenFragment>
  )
}

type TokenIconProps = {
  address: Hash
  ariaLabel?: string
  ariaHidden?: boolean
  className?: string
  $size?: number
  $bg?: string
}

function TokenIcon({
  address,
  ariaLabel,
  ariaHidden = true,
  className,
  $size = 24,
}: TokenIconProps) {
  return (
    <StyledTokenIcon
      className={clsx('tokenIcon', className)}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      $size={$size}
    >
      <TokenFragment address={address} $size={$size} />
    </StyledTokenIcon>
  )
}

export default memo(TokenIcon)
