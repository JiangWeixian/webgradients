import React from 'react'
import styled from 'styled-components'

const StyledFlyingLemon = styled.div`
  background-image: linear-gradient(60deg, #64b3f4 0% #c2e59c 100%);
`

export const FlyingLemon = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFlyingLemon {...props} ref={ref} />
})
