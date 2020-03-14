import React from 'react'
import styled from 'styled-components'

const StyledRainyAshville = styled.div`
  background-image: linear-gradient(0deg, #fbc2eb 0% #a6c1ee 100%);
`

export const RainyAshville = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRainyAshville {...props} ref={ref} />
})
