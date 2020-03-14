import React from 'react'
import styled from 'styled-components'

const StyledGlassWater = styled.div`
  background-image: linear-gradient(0deg, #dfe9f3 0% #ffffff 100%);
`

export const GlassWater = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledGlassWater {...props} ref={ref} />
})
