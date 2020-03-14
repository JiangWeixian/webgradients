import React from 'react'
import styled from 'styled-components'

const StyledHeavenPeach = styled.div`
  background-image: linear-gradient(0deg, #d9afd9 0% #97d9e1 100%);
`

export const HeavenPeach = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHeavenPeach {...props} ref={ref} />
})
