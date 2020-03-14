import React from 'react'
import styled from 'styled-components'

const StyledLadogaBottom = styled.div`
  background-image: linear-gradient(0deg, #ebc0fd 0% #d9ded8 100%);
`

export const LadogaBottom = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLadogaBottom {...props} ref={ref} />
})
