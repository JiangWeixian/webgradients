import React from 'react'
import styled from 'styled-components'

const StyledRiverCity = styled.div`
  background-image: linear-gradient(0deg, #4481eb 0% #04befe 100%);
`

export const RiverCity = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRiverCity {...props} ref={ref} />
})
