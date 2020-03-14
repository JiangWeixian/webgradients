import React from 'react'
import styled from 'styled-components'

const StyledSmartIndigo = styled.div`
  background-image: linear-gradient(0deg, #b224ef 0% #7579ff 100%);
`

export const SmartIndigo = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSmartIndigo {...props} ref={ref} />
})
