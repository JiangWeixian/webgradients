import React from 'react'
import styled from 'styled-components'

const StyledLoveKiss = styled.div`
  background-image: linear-gradient(0deg, #ff0844 0% #ffb199 100%);
`

export const LoveKiss = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLoveKiss {...props} ref={ref} />
})
