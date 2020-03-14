import React from 'react'
import styled from 'styled-components'

const StyledOverSun = styled.div`
  background-image: linear-gradient(60deg, #abecd6 0% #fbed96 100%);
`

export const OverSun = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledOverSun {...props} ref={ref} />
})
