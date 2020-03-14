import React from 'react'
import styled from 'styled-components'

const StyledWarmFlame = styled.div`
  background-image: linear-gradient(45deg, #ff9a9e 0% #fad0c4 99% #fad0c4 100%);
`

export const WarmFlame = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledWarmFlame {...props} ref={ref} />
})
