import React from 'react'
import styled from 'styled-components'

const StyledDesertHump = styled.div`
  background-image: linear-gradient(0deg, #c79081 0% #dfa579 100%);
`

export const DesertHump = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledDesertHump {...props} ref={ref} />
})
