import React from 'react'
import styled, { keyframes } from 'styled-components'

const animated = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

const StyledNewLife = styled.div`
  background-image: linear-gradient(0deg, #43e97b 0% #38f9d7 100%);
  margin: 0px;
  padding: 0px;
  background-position: 0 0;
  background-size: ${(props: { animated?: boolean }) => (props.animated ? '400%' : 'auto')};
  animation: ${(props: { animated?: boolean }) =>
    props.animated ? `${animated} 30s ease infinite` : undefined};
`

export const NewLife = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNewLife {...props} ref={ref} />
})
