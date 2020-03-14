import React from 'react'
import styled from 'styled-components'

const StyledFebruaryInk = styled.div`
  background-image: linear-gradient(0deg, #accbee 0% #e7f0fd 100%);
`

export const FebruaryInk = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFebruaryInk {...props} ref={ref} />
})
