import React from 'react'
import styled from 'styled-components'

const StyledSoftGrass = styled.div`
  background-image: linear-gradient(0deg, #c1dfc4 0% #deecdd 100%);
`

export const SoftGrass = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSoftGrass {...props} ref={ref} />
})
