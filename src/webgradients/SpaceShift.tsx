import React from 'react'
import styled from 'styled-components'

const StyledSpaceShift = styled.div`
  background-image: linear-gradient(60deg, #3d3393 0% #2b76b9 37% #2cacd1 65% #35eb93 100%);
`

export const SpaceShift = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSpaceShift {...props} ref={ref} />
})
