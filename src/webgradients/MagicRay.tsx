import React from 'react'
import styled from 'styled-components'

const StyledMagicRay = styled.div`
  background-image: linear-gradient(-225deg, #ff3cac 0% #562b7c 52% #2b86c5 100%);
`

export const MagicRay = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMagicRay {...props} ref={ref} />
})
