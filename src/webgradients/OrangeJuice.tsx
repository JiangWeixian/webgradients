import React from 'react'
import styled from 'styled-components'

const StyledOrangeJuice = styled.div`
  background-image: linear-gradient(-20deg, #fc6076 0% #ff9a44 100%);
`

export const OrangeJuice = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledOrangeJuice {...props} ref={ref} />
})
