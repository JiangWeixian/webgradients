import React from 'react'
import styled from 'styled-components'

const StyledHeavyRain = styled.div`
  background-image: linear-gradient(0deg, #cfd9df 0% #e2ebf0 100%);
`

export const HeavyRain = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHeavyRain {...props} ref={ref} />
})
