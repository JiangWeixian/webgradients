import React from 'react'
import styled from 'styled-components'

const StyledMoleHall = styled.div`
  background-image: linear-gradient(-20deg, #616161 0% #9bc5c3 100%);
`

export const MoleHall = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMoleHall {...props} ref={ref} />
})
