import styled, { css } from 'styled-components'

import { flexbox } from 'styles/utils'

type StyledImageProps = {
  $objectFit: 'contain' | 'cover'
  $bg?: boolean
}

export const StyledImage = styled.div<StyledImageProps>`
  ${flexbox()}
  position: relative;

  img {
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    object-fit: ${({ $objectFit }) => $objectFit};
    transition: 300ms;
  }

  ${({ $bg }) =>
    $bg &&
    css`
      pointer-events: none;
      user-select: none;
    `}
`
