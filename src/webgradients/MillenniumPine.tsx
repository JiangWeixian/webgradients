import React from 'react'
import styled from 'styled-components'

const StyledMillenniumPine = styled.div`
  background-image: linear-gradient(0deg, #50cc7f 0% #f5d100 100%);
`

export const MillenniumPine = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMillenniumPine {...props} ref={ref} />
})
