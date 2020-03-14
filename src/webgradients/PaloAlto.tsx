import React from 'react'
import styled from 'styled-components'

const StyledPaloAlto = styled.div`
  background-image: linear-gradient(-60deg, #16a085 0% #f4d03f 100%);
`

export const PaloAlto = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPaloAlto {...props} ref={ref} />
})
