import { memo } from 'react'
import clsx from 'clsx'

import { StyledConnectorIcon } from './styled'
import LogoIcon from './LogoIcon'

type ConnectorIconProps = {
  icon: ConnectorIconType
  ariaLabel?: string
  ariaHidden?: boolean
  className?: string
  $size?: number
}

function ConnectorIcon({
  icon,
  ariaLabel,
  ariaHidden = true,
  className,
  $size = 24,
}: ConnectorIconProps) {
  return (
    <StyledConnectorIcon
      className={clsx('connectorIcon', className)}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      $size={$size}
    >
      <LogoIcon icon={icon} />
    </StyledConnectorIcon>
  )
}

export default memo(ConnectorIcon)
