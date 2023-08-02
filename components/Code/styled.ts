import styled from 'styled-components'

export const StyledCode = styled.pre`
  position: absolute;
  padding: 4px;
  background-color: rgba(var(--realBlack-rgb), 0.85);
  border-radius: 3px;

  code {
    width: 100%;
    white-space: pre-wrap;
    font-family: monospace;
    line-height: 1.4;
    font-weight: 700;
    font-size: 13px;
    color: var(--white);
  }
`
