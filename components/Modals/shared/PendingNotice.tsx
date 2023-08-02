import { memo } from 'react'
import { AnimatePresence } from 'framer-motion'

import { ANIMATION_MAP } from 'config/constants/motions'
import { txUrlFor } from 'utils/txUrlFor'
import { useChain, useResponsive } from 'hooks'

import { StyledPendingNotice } from './styled'
import { Icon } from 'components/Icons'
import Lottie from 'components/Lottie'

type PendingNoticeProps = {
  hash?: string
}

function PendingNotice({ hash }: PendingNoticeProps) {
  const { chainId } = useChain()
  const { isHandheld } = useResponsive()
  const link = txUrlFor(hash)

  function openBlockExplorer() {
    if (!link) return

    window.open(link)
  }

  return (
    <AnimatePresence>
      {hash && (
        <StyledPendingNotice
          className="pendingNotice"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={ANIMATION_MAP.slideInDown}
        >
          <Lottie className="lottie" animationData="loading" />

          <div className="content">
            <h4 className="title">Confirmation is in progress. Please wait.</h4>
            <p className="desc">
              Please don&apos;t leave the screen until we give you the
              completion sign.
            </p>
          </div>

          <button className="extLink" type="button" onClick={openBlockExplorer}>
            <span className="explorer">BscScan</span>
            <Icon icon={isHandheld ? 'link' : 'outlink'} />
          </button>
        </StyledPendingNotice>
      )}
    </AnimatePresence>
  )
}

export default memo(PendingNotice)
