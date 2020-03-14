import React from 'react'
import styled from 'styled-components'

const StyledRedSalvation = styled.div`
  background-image: linear-gradient(0deg, #f43b47 0% #453a94 100%);
`

export const RedSalvation = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRedSalvation {...props} ref={ref} />
})
