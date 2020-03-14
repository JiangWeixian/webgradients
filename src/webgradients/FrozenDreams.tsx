import React from 'react'
import styled from 'styled-components'

const StyledFrozenDreams = styled.div`
  background-image: linear-gradient(0deg, #fdcbf1 0% #fdcbf1 1% #e6dee9 100%);
`

export const FrozenDreams = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFrozenDreams {...props} ref={ref} />
})
