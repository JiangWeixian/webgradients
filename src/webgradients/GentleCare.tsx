import React from 'react'
import styled from 'styled-components'

const StyledGentleCare = styled.div`
  background-image: linear-gradient(0deg, #ffc3a0 0% #ffafbd 100%);
`

export const GentleCare = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledGentleCare {...props} ref={ref} />
})
