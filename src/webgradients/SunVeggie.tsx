import React from 'react'
import styled from 'styled-components'

const StyledSunVeggie = styled.div`
  background-image: linear-gradient(-225deg, #20e2d7 0% #f9fea5 100%);
`

export const SunVeggie = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSunVeggie {...props} ref={ref} />
})
