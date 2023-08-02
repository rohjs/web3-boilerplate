import { memo } from 'react'
import Link from 'next/link'

import { ANIMATION_MAP, MOTION } from 'config/constants/motions'
import { explorerUrlFor } from 'utils/explorerUrlFor'
import { useChain } from 'hooks'

import { StyledGnbMenuList } from './styled'
import { Icon } from 'components/Icons'

// TODO: Check Link url
function GnbMenuList() {
  const { contractAddress } = useChain()

  return (
    <StyledGnbMenuList {...MOTION} variants={ANIMATION_MAP.fadeIn}>
      <li className="navItem">
        <Link href="#" target="_blank" rel="noopener" aria-label="Documents">
          <Icon className="iconButton" icon="docs" $size={24} />
        </Link>
      </li>

      <li className="navItem">
        <Link href="#" target="_blank" rel="noopener" aria-label="Medium">
          <Icon className="iconButton" icon="medium" $size={24} />
        </Link>
      </li>

      <li className="navItem">
        <Link
          href={explorerUrlFor(contractAddress)}
          target="_blank"
          rel="noopener"
          aria-label="Etherscan"
        >
          <Icon className="iconButton" icon="blockExplorer" $size={24} />
        </Link>
      </li>
    </StyledGnbMenuList>
  )
}

export default memo(GnbMenuList)
