import React from 'react'
import styled from 'styled-components'

const StyledFlyHigh = styled.div`
  background-image: linear-gradient(0deg, #48c6ef 0% #6f86d6 100%);
`

export const FlyHigh = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFlyHigh {...props} ref={ref} />
})
