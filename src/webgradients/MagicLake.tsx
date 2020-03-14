import React from 'react'
import styled from 'styled-components'

const StyledMagicLake = styled.div`
  background-image: linear-gradient(0deg, #d5dee7 0% #ffafbd 0% #c9ffbf 100%);
`

export const MagicLake = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMagicLake {...props} ref={ref} />
})
