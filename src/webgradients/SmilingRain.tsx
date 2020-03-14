import React from 'react'
import styled from 'styled-components'

const StyledSmilingRain = styled.div`
  background-image: linear-gradient(-20deg, #dcb0ed 0% #99c99c 100%);
`

export const SmilingRain = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSmilingRain {...props} ref={ref} />
})
