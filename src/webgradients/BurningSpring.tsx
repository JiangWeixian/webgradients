import React from 'react'
import styled from 'styled-components'

const StyledBurningSpring = styled.div`
  background-image: linear-gradient(
    0deg,
    #4fb576 0% #44c489 30% #28a9ae 46% #28a2b7 59% #4c7788 71% #6c4f63 80% #432c39 100%
  );
`

export const BurningSpring = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledBurningSpring {...props} ref={ref} />
})
