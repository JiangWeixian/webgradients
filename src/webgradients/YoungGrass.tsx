import React from 'react'
import styled from 'styled-components'

const StyledYoungGrass = styled.div`
  background-image: linear-gradient(0deg, #9be15d 0% #00e3ae 100%);
`

export const YoungGrass = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledYoungGrass {...props} ref={ref} />
})
