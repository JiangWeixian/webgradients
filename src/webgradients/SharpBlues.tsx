import React from 'react'
import styled from 'styled-components'

const StyledSharpBlues = styled.div`
  background-image: linear-gradient(0deg, #00c6fb 0% #005bea 100%);
`

export const SharpBlues = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSharpBlues {...props} ref={ref} />
})
