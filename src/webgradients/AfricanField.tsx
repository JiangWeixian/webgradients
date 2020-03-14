import React from 'react'
import styled from 'styled-components'

const StyledAfricanField = styled.div`
  background-image: linear-gradient(0deg, #65bd60 0% #5ac1a8 25% #3ec6ed 50%);
`

export const AfricanField = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAfricanField {...props} ref={ref} />
})
