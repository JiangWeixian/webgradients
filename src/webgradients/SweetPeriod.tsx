import React from 'react'
import styled from 'styled-components'

const StyledSweetPeriod = styled.div`
  background-image: linear-gradient(
    0deg,
    #3f51b1 0% #5a55ae 13% #7b5fac 25% #8f6aae 38% #a86aa4 50% #cc6b8e 62% #f18271 75% #f3a469 87%
      #f7c978 100%
  );
`

export const SweetPeriod = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSweetPeriod {...props} ref={ref} />
})
