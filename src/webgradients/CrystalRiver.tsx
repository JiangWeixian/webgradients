import React from 'react'
import styled from 'styled-components'

const StyledCrystalRiver = styled.div`
  background-image: linear-gradient(-225deg, #22e1ff 0% #1d8fe1 48% #625eb1 100%);
`

export const CrystalRiver = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledCrystalRiver {...props} ref={ref} />
})
