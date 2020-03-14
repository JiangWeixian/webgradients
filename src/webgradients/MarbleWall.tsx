import React from 'react'
import styled from 'styled-components'

const StyledMarbleWall = styled.div`
  background-image: linear-gradient(0deg, #bdc2e8 0% #bdc2e8 1% #e6dee9 100%);
`

export const MarbleWall = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMarbleWall {...props} ref={ref} />
})
