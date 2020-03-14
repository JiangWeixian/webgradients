import React from 'react'
import styled from 'styled-components'

const StyledJuicyPeach = styled.div`
  background-image: linear-gradient(90deg, #ffecd2 0% #fcb69f 100%);
`

export const JuicyPeach = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledJuicyPeach {...props} ref={ref} />
})
