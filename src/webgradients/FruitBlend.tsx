import React from 'react'
import styled from 'styled-components'

const StyledFruitBlend = styled.div`
  background-image: linear-gradient(0deg, #f9d423 0% #ff4e50 100%);
`

export const FruitBlend = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFruitBlend {...props} ref={ref} />
})
