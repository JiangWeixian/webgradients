import React from 'react'
import styled from 'styled-components'

const StyledRiskyConcrete = styled.div`
  background-image: linear-gradient(0deg, #c4c5c7 0% #dcdddf 52% #ebebeb 100%);
`

export const RiskyConcrete = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRiskyConcrete {...props} ref={ref} />
})
