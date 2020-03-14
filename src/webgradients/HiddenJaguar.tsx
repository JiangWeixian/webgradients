import React from 'react'
import styled from 'styled-components'

const StyledHiddenJaguar = styled.div`
  background-image: linear-gradient(0deg, #0fd850 0% #f9f047 100%);
`

export const HiddenJaguar = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHiddenJaguar {...props} ref={ref} />
})
