import React from 'react'
import styled from 'styled-components'

const StyledSandStrike = styled.div`
  background-image: linear-gradient(0deg, #c1c161 0% #c1c161 0% #d4d4b1 100%);
`

export const SandStrike = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSandStrike {...props} ref={ref} />
})
