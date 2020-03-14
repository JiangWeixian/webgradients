import React from 'react'
import styled from 'styled-components'

const StyledPoliteRumors = styled.div`
  background-image: linear-gradient(0deg, #a7a6cb 0% #8989ba 52% #8989ba 100%);
`

export const PoliteRumors = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPoliteRumors {...props} ref={ref} />
})
