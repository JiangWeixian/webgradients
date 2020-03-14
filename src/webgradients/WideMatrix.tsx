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

const StyledWideMatrix = styled.div`
  background-image: linear-gradient(
    0deg,
    #fcc5e4 0% #fda34b 15% #ff7882 35% #c8699e 52% #7046aa 71% #0c1db8 87% #020f75 100%
  );
  margin: 0px;
  padding: 0px;
  background-position: 0 0;
  background-size: ${(props: { animated?: boolean }) => (props.animated ? '400%' : 'auto')};
  animation: ${(props: { animated?: boolean }) =>
    props.animated ? `${animated} 30s ease infinite` : undefined};
`

export const WideMatrix = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledWideMatrix {...props} ref={ref} />
})
