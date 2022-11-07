import styled from "styled-components"

import { flexbox, inlineFlexbox } from "styles/utils"

export const StyledConnectorIcon = styled.span<{ $size: number }>`
  ${inlineFlexbox()}
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--white);
`

export const StyledSvgIcon = styled.svg<{ $size: number }>`
  ${inlineFlexbox()}
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
`

export const StyledTokenIcon = styled.span<{ $size: number }>`
  ${flexbox()}
  flex-shrink: 0;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  border-radius: 50%;

  &.placeholder {
    background-color: var(--primary-500);
  }

  img,
  svg {
    width: ${({ $size }) => `${$size}px`};
    height: ${({ $size }) => `${$size}px`};
  }
`
