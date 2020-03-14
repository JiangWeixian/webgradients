import React from 'react'
import styled from 'styled-components'

const StyledJuicyCake = styled.div`
  background-image: linear-gradient(0deg, #e14fad 0% #f9d423 100%);
`

export const JuicyCake = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledJuicyCake {...props} ref={ref} />
})
