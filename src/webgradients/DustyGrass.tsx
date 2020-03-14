import React from 'react'
import styled from 'styled-components'

const StyledDustyGrass = styled.div`
  background-image: linear-gradient(120deg, #d4fc79 0% #96e6a1 100%);
`

export const DustyGrass = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledDustyGrass {...props} ref={ref} />
})
