import React from 'react'
import styled from 'styled-components'

const StyledAquaSplash = styled.div`
  background-image: linear-gradient(15deg, #13547a 0% #80d0c7 100%);
`

export const AquaSplash = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAquaSplash {...props} ref={ref} />
})
