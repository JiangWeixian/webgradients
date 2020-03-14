import React from 'react'
import styled from 'styled-components'

const StyledSkyGlider = styled.div`
  background-image: linear-gradient(0deg, #88d3ce 0% #6e45e2 100%);
`

export const SkyGlider = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSkyGlider {...props} ref={ref} />
})
