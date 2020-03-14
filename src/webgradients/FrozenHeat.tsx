import React from 'react'
import styled from 'styled-components'

const StyledFrozenHeat = styled.div`
  background-image: linear-gradient(-225deg, #ff057c 0% #7c64d5 48% #4cc3ff 100%);
`

export const FrozenHeat = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFrozenHeat {...props} ref={ref} />
})
