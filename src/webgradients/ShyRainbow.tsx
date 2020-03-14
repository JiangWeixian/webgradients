import React from 'react'
import styled from 'styled-components'

const StyledShyRainbow = styled.div`
  background-image: linear-gradient(0deg, #eea2a2 0% #bbc1bf 19% #57c6e1 42%);
`

export const ShyRainbow = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledShyRainbow {...props} ref={ref} />
})
