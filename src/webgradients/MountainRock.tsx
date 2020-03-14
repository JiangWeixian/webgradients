import React from 'react'
import styled from 'styled-components'

const StyledMountainRock = styled.div`
  background-image: linear-gradient(0deg, #868f96 0% #596164 100%);
`

export const MountainRock = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMountainRock {...props} ref={ref} />
})
