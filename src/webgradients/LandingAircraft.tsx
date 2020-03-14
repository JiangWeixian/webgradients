import React from 'react'
import styled from 'styled-components'

const StyledLandingAircraft = styled.div`
  background-image: linear-gradient(-225deg, #5d9fff 0% #b8dcff 48% #6bbbff 100%);
`

export const LandingAircraft = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLandingAircraft {...props} ref={ref} />
})
