import React from 'react'
import styled from 'styled-components'

const StyledBlackSea = styled.div`
  background-image: linear-gradient(-225deg, #2cd8d5 0% #6b8dd6 48% #8e37d7 100%);
`

export const BlackSea = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledBlackSea {...props} ref={ref} />
})
