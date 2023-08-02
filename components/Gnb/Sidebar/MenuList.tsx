import { memo } from 'react'
import Link from 'next/link'

import { explorerUrlFor } from 'utils/explorerUrlFor'
import { useChain } from 'hooks'

import { StyledSidebarMenuList } from './styled'

// TODO: Link

function MenuList() {
  const { chainId, contractAddress, explorerName } = useChain()

  return (
    <StyledSidebarMenuList>
      <li className="navItem">
        <Link href="#" target="_blank" rel="noopener">
          Docs
        </Link>
      </li>

      <li className="navItem">
        <Link href="#" target="_blank" rel="noopener">
          Medium
        </Link>
      </li>

      <li className="navItem">
        <Link
          href={explorerUrlFor(contractAddress)}
          target="_blank"
          rel="noopener"
        >
          {explorerName}
        </Link>
      </li>
    </StyledSidebarMenuList>
  )
}

export default memo(MenuList)
