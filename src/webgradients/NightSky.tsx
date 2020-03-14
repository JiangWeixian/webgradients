import React from 'react'
import styled from 'styled-components'

const StyledNightSky = styled.div`
  background-image: linear-gradient(0deg, #1e3c72 0% #1e3c72 1% #2a5298 100%);
`

export const NightSky = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNightSky {...props} ref={ref} />
})
