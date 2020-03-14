import React from 'react'
import styled from 'styled-components'

const StyledStrongStick = styled.div`
  background-image: linear-gradient(0deg, #a8caba 0% #5d4157 100%);
`

export const StrongStick = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledStrongStick {...props} ref={ref} />
})
