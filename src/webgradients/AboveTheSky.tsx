import React from 'react'
import styled from 'styled-components'

const StyledAboveTheSky = styled.div`
  background-image: linear-gradient(0deg, #d3d3d3 0% #d3d3d3 1% #e0e0e0 26%);
`

export const AboveTheSky = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAboveTheSky {...props} ref={ref} />
})
