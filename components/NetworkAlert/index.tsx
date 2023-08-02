'use client'

import { AnimatePresence, motion } from 'framer-motion'

import { ANIMATION_MAP, EXIT_MOTION } from 'config/constants/motions'
import { useChain, useSwitchNetwork } from 'hooks'

import { StyledNetworkAlert } from './styled'
import { Icon } from 'components/Icons'

export default function NetworkAlert() {
  const { chainId, currentChain, network, shortName } = useChain()
  const { switchNetwork } = useSwitchNetwork()

  const showAlert = !!currentChain?.id && currentChain?.id !== chainId

  return (
    <StyledNetworkAlert role="alert" layout $enabled={showAlert}>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="content"
            {...EXIT_MOTION}
            variants={ANIMATION_MAP.slideInDown}
          >
            <Icon icon="warning" $size={24} />
            <h1 className="desc">Please switch to {shortName}</h1>

            <button
              className="switchButton"
              type="button"
              onClick={switchNetwork}
            >
              Switch network
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledNetworkAlert>
  )
}
