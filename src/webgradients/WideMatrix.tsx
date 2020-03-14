import React from 'react'
import styled from 'styled-components'

const StyledWideMatrix = styled.div`
  background-image: linear-gradient(
    0deg,
    #fcc5e4 0% #fda34b 15% #ff7882 35% #c8699e 52% #7046aa 71% #0c1db8 87% #020f75 100%
  );
`

export const WideMatrix = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledWideMatrix {...props} ref={ref} />
})
