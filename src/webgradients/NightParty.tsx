import React from 'react'
import styled from 'styled-components'

const StyledNightParty = styled.div`
  background-image: linear-gradient(0deg, #0250c5 0% #d43f8d 100%);
`

export const NightParty = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNightParty {...props} ref={ref} />
})
