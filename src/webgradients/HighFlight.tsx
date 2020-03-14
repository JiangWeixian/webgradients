import React from 'react'
import styled from 'styled-components'

const StyledHighFlight = styled.div`
  background-image: linear-gradient(0deg, #0acffe 0% #495aff 100%);
`

export const HighFlight = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHighFlight {...props} ref={ref} />
})
