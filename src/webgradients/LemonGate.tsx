import React from 'react'
import styled from 'styled-components'

const StyledLemonGate = styled.div`
  background-image: linear-gradient(0deg, #96fbc4 0% #f9f586 100%);
`

export const LemonGate = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLemonGate {...props} ref={ref} />
})
