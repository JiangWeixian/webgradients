import React from 'react'
import styled from 'styled-components'

const StyledRaccoonBack = styled.div`
  background-image: linear-gradient(-180deg, #bcc5ce 0% #929ead 98%);
`

export const RaccoonBack = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRaccoonBack {...props} ref={ref} />
})
