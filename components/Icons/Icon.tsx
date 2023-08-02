import { memo } from 'react'
import clsx from 'clsx'

import { StyledIcon } from './styled'
import CoinIcon from 'public/icons/ic-coin.svg' // NOTE: Only 32

type IconProps = {
  ariaLabel?: string
  ariaHidden?: boolean
  icon: IconType
  className?: string
  $size?: IconSize
}

function Icon({
  ariaLabel,
  ariaHidden = true,
  icon,
  className,
  $size = 16,
}: IconProps) {
  if (icon === 'coin') {
    return (
      <StyledIcon
        className={clsx('icon', icon, className)}
        as="span"
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        $size={$size}
      >
        <CoinIcon />
      </StyledIcon>
    )
  }

  return (
    <StyledIcon
      className={clsx('icon', icon, className)}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      $size={$size}
    >
      <use href={`/icons/ic-${icon}.svg#size-${$size}`} />
    </StyledIcon>
  )
}

export default memo(Icon)
