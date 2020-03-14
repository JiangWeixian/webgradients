import React from 'react'
import styled from 'styled-components'

const StyledZeusMiracle = styled.div`
  background-image: linear-gradient(0deg, #cd9cf2 0% #f6f3ff 100%);
`

export const ZeusMiracle = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledZeusMiracle {...props} ref={ref} />
})
