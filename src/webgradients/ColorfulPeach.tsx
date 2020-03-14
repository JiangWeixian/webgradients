import React from 'react'
import styled from 'styled-components'

const StyledColorfulPeach = styled.div`
  background-image: linear-gradient(0deg, #ed6ea0 0% #ec8c69 100%);
`

export const ColorfulPeach = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledColorfulPeach {...props} ref={ref} />
})
