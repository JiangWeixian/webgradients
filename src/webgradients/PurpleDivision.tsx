import React from 'react'
import styled from 'styled-components'

const StyledPurpleDivision = styled.div`
  background-image: linear-gradient(0deg, #7028e4 0% #e5b2ca 100%);
`

export const PurpleDivision = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPurpleDivision {...props} ref={ref} />
})
