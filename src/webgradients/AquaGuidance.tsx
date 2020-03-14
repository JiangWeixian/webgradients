import React from 'react'
import styled from 'styled-components'

const StyledAquaGuidance = styled.div`
  background-image: linear-gradient(0deg, #007adf 0% #00ecbc 100%);
`

export const AquaGuidance = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAquaGuidance {...props} ref={ref} />
})
