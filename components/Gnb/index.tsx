'use client'

import { MouseEvent, useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AnimatePresence } from 'framer-motion'

import { useAuth, useResponsive } from 'hooks'

import { StyledGnb } from './styled'
import Image from 'components/Image'
import AccountMenu from './AccountMenu'
import MenuButton from './MenuButton'
import MenuList from './MenuList'
import Sidebar from './Sidebar'

const ConnectButton = dynamic(() => import('./ConnectButton'), {
  ssr: false,
})

export default function Gnb() {
  const [show, setShow] = useState(false)
  const [showSidebar, setShowSidebar] = useState(false)

  const { isConnected } = useAuth()
  const { bp } = useResponsive()
  const router = useRouter()

  const logoSrc = useMemo(() => {
    const breakpoint =
      bp === 'smLaptop' ? 'laptop' : bp === null ? 'desktop' : bp
    return `/logo-staking-${breakpoint}.png`
  }, [bp])

  function openSidebar(e: MouseEvent) {
    e.stopPropagation()
    setShowSidebar(true)
  }

  function closeMenu() {
    setShow(false)
  }

  function closeSidebar() {
    setShowSidebar(false)
  }

  function toggle(e: MouseEvent) {
    e.stopPropagation()
    setShow((prev) => !prev)
  }

  function onLogoClick() {
    router.refresh()
  }

  return (
    <StyledGnb>
      <div className="left">
        <h1 className="logo">
          <Link href="/wncg" onClick={onLogoClick}>
            <Image src={logoSrc} alt="WNCG Staking" />
          </Link>
        </h1>
      </div>

      <div className="right">
        <MenuList />

        <div className="settings">
          <div className="account">
            <ConnectButton toggle={toggle} />

            <AnimatePresence>
              {show && <AccountMenu closeMenu={closeMenu} />}
            </AnimatePresence>
          </div>

          <MenuButton open={openSidebar} />
        </div>

        <AnimatePresence>
          {showSidebar && <Sidebar closeSidebar={closeSidebar} />}
        </AnimatePresence>
      </div>
    </StyledGnb>
  )
}
