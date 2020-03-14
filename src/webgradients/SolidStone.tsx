import React from 'react'
import styled from 'styled-components'

const StyledSolidStone = styled.div`
  background-image: linear-gradient(0deg, #243949 0% #517fa4 100%);
`

export const SolidStone = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSolidStone {...props} ref={ref} />
})
