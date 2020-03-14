import React from 'react'
import styled from 'styled-components'

const StyledCrystalline = styled.div`
  background-image: linear-gradient(-20deg, #00cdac 0% #8ddad5 100%);
`

export const Crystalline = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledCrystalline {...props} ref={ref} />
})
