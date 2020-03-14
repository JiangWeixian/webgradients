import React from 'react'
import styled from 'styled-components'

const StyledSweetDessert = styled.div`
  background-image: linear-gradient(-225deg, #7742b2 0% #f180ff 52% #fd8bd9 100%);
`

export const SweetDessert = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSweetDessert {...props} ref={ref} />
})
