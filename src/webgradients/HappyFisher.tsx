import React from 'react'
import styled from 'styled-components'

const StyledHappyFisher = styled.div`
  background-image: linear-gradient(120deg, #89f7fe 0% #66a6ff 100%);
`

export const HappyFisher = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHappyFisher {...props} ref={ref} />
})
