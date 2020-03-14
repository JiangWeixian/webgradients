import React from 'react'
import styled from 'styled-components'

const StyledFullMetal = styled.div`
  background-image: linear-gradient(0deg, #d5dee7 0% #e8ebf2 50% #e2e7ed 100%);
`

export const FullMetal = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFullMetal {...props} ref={ref} />
})
