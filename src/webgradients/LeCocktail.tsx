import React from 'react'
import styled from 'styled-components'

const StyledLeCocktail = styled.div`
  background-image: linear-gradient(45deg, #874da2 0% #c43a30 100%);
`

export const LeCocktail = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLeCocktail {...props} ref={ref} />
})
