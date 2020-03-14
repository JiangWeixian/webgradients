import React from 'react'
import styled from 'styled-components'

const StyledAlchemistLab = styled.div`
  background-image: linear-gradient(-20deg, #d558c8 0% #24d292 100%);
`

export const AlchemistLab = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAlchemistLab {...props} ref={ref} />
})
