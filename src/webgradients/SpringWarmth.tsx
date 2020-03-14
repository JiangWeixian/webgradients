import React from 'react'
import styled from 'styled-components'

const StyledSpringWarmth = styled.div`
  background-image: linear-gradient(0deg, #fad0c4 0% #fad0c4 1% #ffd1ff 100%);
`

export const SpringWarmth = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSpringWarmth {...props} ref={ref} />
})
