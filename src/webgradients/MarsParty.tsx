import React from 'react'
import styled from 'styled-components'

const StyledMarsParty = styled.div`
  background-image: linear-gradient(0deg, #5f72bd 0% #9b23ea 100%);
`

export const MarsParty = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMarsParty {...props} ref={ref} />
})
