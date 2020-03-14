import React from 'react'
import styled from 'styled-components'

const StyledOldHat = styled.div`
  background-image: linear-gradient(
    0deg,
    #e4afcb 0% #b8cbb8 0% #b8cbb8 0% #e2c58b 30% #c2ce9c 64% #7edbdc 100%
  );
`

export const OldHat = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledOldHat {...props} ref={ref} />
})
