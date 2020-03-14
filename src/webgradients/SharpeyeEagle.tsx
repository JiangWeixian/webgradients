import React from 'react'
import styled from 'styled-components'

const StyledSharpeyeEagle = styled.div`
  background-image: linear-gradient(0deg, #9890e3 0% #b1f4cf 100%);
`

export const SharpeyeEagle = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSharpeyeEagle {...props} ref={ref} />
})
