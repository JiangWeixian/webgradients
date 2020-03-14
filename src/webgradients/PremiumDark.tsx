import React from 'react'
import styled from 'styled-components'

const StyledPremiumDark = styled.div`
  background-image: linear-gradient(0deg, #434343 0% #000000 100%);
`

export const PremiumDark = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPremiumDark {...props} ref={ref} />
})
