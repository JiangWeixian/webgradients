import React from 'react'
import styled from 'styled-components'

const StyledSpikyNaga = styled.div`
  background-image: linear-gradient(0deg, #505285 0% #585e92 12% #65689f 25%);
`

export const SpikyNaga = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSpikyNaga {...props} ref={ref} />
})
