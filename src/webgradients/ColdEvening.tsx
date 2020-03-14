import React from 'react'
import styled from 'styled-components'

const StyledColdEvening = styled.div`
  background-image: linear-gradient(0deg, #0c3483 0% #a2b6df 100% #6b8cce 100%);
`

export const ColdEvening = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledColdEvening {...props} ref={ref} />
})
