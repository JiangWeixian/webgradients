import React from 'react'
import styled from 'styled-components'

const StyledBigMango = styled.div`
  background-image: linear-gradient(0deg, #c71d6f 0% #d09693 100%);
`

export const BigMango = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledBigMango {...props} ref={ref} />
})
