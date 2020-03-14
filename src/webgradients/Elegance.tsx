import React from 'react'
import styled from 'styled-components'

const StyledElegance = styled.div`
  background-image: linear-gradient(0deg, #eadfdf 59% #ece2df 100%);
`

export const Elegance = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledElegance {...props} ref={ref} />
})
