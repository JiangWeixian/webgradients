import React from 'react'
import styled from 'styled-components'

const StyledHappyAcid = styled.div`
  background-image: linear-gradient(0deg, #37ecba 0% #72afd3 100%);
`

export const HappyAcid = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHappyAcid {...props} ref={ref} />
})
