import styled from 'styled-components'
import { motion } from 'framer-motion'

import { flexbox } from 'styles/utils'

export const StyledSkeleton = styled(motion.div)<{
  $type: 'light' | 'dark' | 'medium'
}>`
  ${flexbox('start')}
  flex-shrink: 0;

  span {
    display: block;
    width: 100%;
    animation: skeletonLoading 2s ease-in-out infinite;
    background-size: 200% 200%;
    background-image: ${({ $type }) =>
      $type === 'light'
        ? `linear-gradient(90deg, rgba(234, 240, 247, 0.4) 0%, #dce4ed 50%, rgba(234, 240, 247, 0.4) 100%)`
        : $type === 'medium'
        ? `linear-gradient(90deg, rgba(var(--white-rgb), 0.08) 0%, rgba(var(--white-rgb), 0.12) 100%)`
        : `linear-gradient(90deg, rgba(33, 35, 34, 0.1) 0%, rgba(33, 35, 34, 0.5) 100%)`};
  }

  @keyframes skeletonLoading {
    0% {
      background-position: 0% 51%;
    }

    100% {
      background-position: -200% 0;
    }
  }
`
