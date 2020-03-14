import React from 'react'
import styled from 'styled-components'

const StyledNewLife = styled.div`
  background-image: linear-gradient(0deg, #43e97b 0% #38f9d7 100%);
`

export const NewLife = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNewLife {...props} ref={ref} />
})
