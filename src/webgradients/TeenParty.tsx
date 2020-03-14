import React from 'react'
import styled from 'styled-components'

const StyledTeenParty = styled.div`
  background-image: linear-gradient(-225deg, #ff057c 0% #8d0b93 50% #321575 100%);
`

export const TeenParty = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledTeenParty {...props} ref={ref} />
})
