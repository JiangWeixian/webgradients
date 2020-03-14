import React from 'react'
import styled from 'styled-components'

const StyledStarWine = styled.div`
  background-image: linear-gradient(
    0deg,
    #b8cbb8 0% #b8cbb8 0% #b465da 0% #cf6cc9 33% #ee609c 66% #ee609c 100%
  );
`

export const StarWine = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledStarWine {...props} ref={ref} />
})
