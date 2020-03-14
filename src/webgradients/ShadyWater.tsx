import React from 'react'
import styled from 'styled-components'

const StyledShadyWater = styled.div`
  background-image: linear-gradient(0deg, #74ebd5 0% #9face6 100%);
`

export const ShadyWater = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledShadyWater {...props} ref={ref} />
})
