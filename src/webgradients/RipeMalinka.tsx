import React from 'react'
import styled from 'styled-components'

const StyledRipeMalinka = styled.div`
  background-image: linear-gradient(120deg, #f093fb 0% #f5576c 100%);
`

export const RipeMalinka = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRipeMalinka {...props} ref={ref} />
})
