import React from 'react'
import styled from 'styled-components'

const StyledAmourAmour = styled.div`
  background-image: linear-gradient(0deg, #f77062 0% #fe5196 100%);
`

export const AmourAmour = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAmourAmour {...props} ref={ref} />
})
