import React from 'react'
import styled from 'styled-components'

const StyledMidnightBloom = styled.div`
  background-image: linear-gradient(-20deg, #2b5876 0% #4e4376 100%);
`

export const MidnightBloom = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMidnightBloom {...props} ref={ref} />
})
