import React from 'react'
import styled from 'styled-components'

const StyledFarawayRiver = styled.div`
  background-image: linear-gradient(-20deg, #6e45e2 0% #88d3ce 100%);
`

export const FarawayRiver = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFarawayRiver {...props} ref={ref} />
})
