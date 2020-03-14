import React from 'react'
import styled from 'styled-components'

const StyledGreatWhale = styled.div`
  background-image: linear-gradient(0deg, #a3bded 0% #6991c7 100%);
`

export const GreatWhale = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledGreatWhale {...props} ref={ref} />
})
