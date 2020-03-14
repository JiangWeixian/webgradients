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

const StyledJuicyCake = styled.div`
  background-image: linear-gradient(0deg, #e14fad 0% #f9d423 100%);
  margin: 0px;
  padding: 0px;
  background-position: 0 0;
  background-size: ${(props: { animated?: boolean }) => (props.animated ? '400%' : 'auto')};
  animation: ${(props: { animated?: boolean }) =>
    props.animated ? `${animated} 30s ease infinite` : undefined};
`

export const JuicyCake = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledJuicyCake {...props} ref={ref} />
})
