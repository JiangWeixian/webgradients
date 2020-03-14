import React from 'react'
import styled from 'styled-components'

const StyledGrassShampoo = styled.div`
  background-image: linear-gradient(-225deg, #dfffcd 0% #90f9c4 48% #39f3bb 100%);
`

export const GrassShampoo = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledGrassShampoo {...props} ref={ref} />
})
