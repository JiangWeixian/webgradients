import React from 'react'
import styled from 'styled-components'

const StyledLightBlue = styled.div`
  background-image: linear-gradient(-225deg, #9efbd3 0% #57e9f2 48% #45d4fb 100%);
`

export const LightBlue = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLightBlue {...props} ref={ref} />
})
