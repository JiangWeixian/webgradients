import React from 'react'
import styled from 'styled-components'

const StyledSoftCherish = styled.div`
  background-image: linear-gradient(
    0deg,
    #dbdcd7 0% #dddcd7 24% #e2c9cc 30% #e7627d 46% #b8235a 59% #801357 71% #3d1635 84% #1c1a27 100%
  );
`

export const SoftCherish = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSoftCherish {...props} ref={ref} />
})
