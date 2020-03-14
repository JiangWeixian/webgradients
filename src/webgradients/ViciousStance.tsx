import React from 'react'
import styled from 'styled-components'

const StyledViciousStance = styled.div`
  background-image: linear-gradient(60deg, #29323c 0% #485563 100%);
`

export const ViciousStance = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledViciousStance {...props} ref={ref} />
})
