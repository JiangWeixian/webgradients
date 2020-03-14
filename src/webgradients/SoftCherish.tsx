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

const StyledSoftCherish = styled.div`
  background-image: linear-gradient(
    0deg,
    #dbdcd7 0% #dddcd7 24% #e2c9cc 30% #e7627d 46% #b8235a 59% #801357 71% #3d1635 84% #1c1a27 100%
  );
  margin: 0px;
  padding: 0px;
  background-position: 0 0;
  background-size: ${(props: { animated?: boolean }) => (props.animated ? '400%' : 'auto')};
  animation: ${(props: { animated?: boolean }) =>
    props.animated ? `${animated} 30s ease infinite` : undefined};
`

export const SoftCherish = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSoftCherish {...props} ref={ref} />
})
