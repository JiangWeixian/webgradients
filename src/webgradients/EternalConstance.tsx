import React from 'react'
import styled from 'styled-components'

const StyledEternalConstance = styled.div`
  background-image: linear-gradient(0deg, #09203f 0% #537895 100%);
`

export const EternalConstance = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledEternalConstance {...props} ref={ref} />
})
