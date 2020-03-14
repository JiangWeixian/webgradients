import React from 'react'
import styled from 'styled-components'

const StyledLadyLips = styled.div`
  background-image: linear-gradient(0deg, #ff9a9e 0% #fecfef 99% #fecfef 100%);
`

export const LadyLips = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLadyLips {...props} ref={ref} />
})
