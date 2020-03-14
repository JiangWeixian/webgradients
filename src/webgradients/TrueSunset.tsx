import React from 'react'
import styled from 'styled-components'

const StyledTrueSunset = styled.div`
  background-image: linear-gradient(0deg, #fa709a 0% #fee140 100%);
`

export const TrueSunset = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledTrueSunset {...props} ref={ref} />
})
