import React from 'react'
import styled from 'styled-components'

const StyledEverlastingSky = styled.div`
  background-image: linear-gradient(135deg, #fdfcfb 0% #e2d1c3 100%);
`

export const EverlastingSky = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledEverlastingSky {...props} ref={ref} />
})
