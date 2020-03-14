import React from 'react'
import styled from 'styled-components'

const StyledPlumBath = styled.div`
  background-image: linear-gradient(0deg, #cc208e 0% #6713d2 100%);
`

export const PlumBath = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPlumBath {...props} ref={ref} />
})
