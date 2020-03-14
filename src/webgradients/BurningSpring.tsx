import React from 'react'
import styled, { keyframes, css } from 'styled-components'

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

const animation = (props: { animated?: boolean }) =>
  props.animated
    ? css`
        ${animated} 30s ease infinite
      `
    : undefined

const StyledBurningSpring = styled.div`
  background-image: linear-gradient(
    0deg,
    #4fb576 0%,
    #44c489 30%,
    #28a9ae 46%,
    #28a2b7 59%,
    #4c7788 71%,
    #6c4f63 80%,
    #432c39 100%
  );
  margin: 0px;
  padding: 0px;
  background-position: 0 0;
  background-size: ${(props: { animated?: boolean }) => (props.animated ? '400%' : 'auto')};
  animation: ${animation};
`

export const BurningSpring = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    animated?: boolean
  }
>((props, ref) => {
  return <StyledBurningSpring {...props} ref={ref} />
})
