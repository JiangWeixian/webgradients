import React from 'react'
import styled from 'styled-components'

const StyledGagarinView = styled.div`
  background-image: linear-gradient(-225deg, #69eacb 0% #eaccf8 48% #6654f1 100%);
`

export const GagarinView = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledGagarinView {...props} ref={ref} />
})
