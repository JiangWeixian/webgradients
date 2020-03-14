import React from 'react'
import styled from 'styled-components'

const StyledTeenNotebook = styled.div`
  background-image: linear-gradient(0deg, #9795f0 0% #fbc8d4 100%);
`

export const TeenNotebook = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledTeenNotebook {...props} ref={ref} />
})
