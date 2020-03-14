import React from 'react'
import styled from 'styled-components'

const StyledPremiumWhite = styled.div`
  background-image: linear-gradient(0deg, #d5d4d0 0% #d5d4d0 1% #eeeeec 31%);
`

export const PremiumWhite = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPremiumWhite {...props} ref={ref} />
})
