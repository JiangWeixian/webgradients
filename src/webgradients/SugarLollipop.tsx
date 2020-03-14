import React from 'react'
import styled from 'styled-components'

const StyledSugarLollipop = styled.div`
  background-image: linear-gradient(-225deg, #a445b2 0% #d41872 52% #ff0066 100%);
`

export const SugarLollipop = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSugarLollipop {...props} ref={ref} />
})
