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

const animation = (props: { animated?: boolean }) => props.animated ? css`${animated} 30s ease infinite` : undefined

const {{ styledname }} = styled.div`
  background-image: linear-gradient({{ deg }}, {{ colors }});
  margin: 0px;
  padding: 0px;
  background-position: 0 0;
  background-size: ${(props: { animated?: boolean }) => props.animated ? '400%' : 'auto'};
  animation: ${animation};
`

export const {{ name }} = React.forwardRef<HTMLDivElement, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & { animated?: boolean }>((props, ref) => {
  return (
    <{{ styledname }} {...props} ref={ref} />
  )
})
