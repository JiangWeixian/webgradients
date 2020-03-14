import React from 'react'
import styled from 'styled-components'

const StyledHealthyWater = styled.div`
  background-image: linear-gradient(60deg, #96deda 0% #50c9c3 100%);
`

export const HealthyWater = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHealthyWater {...props} ref={ref} />
})
