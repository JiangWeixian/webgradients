import React from 'react'
import styled from 'styled-components'

const StyledGrownEarly = styled.div`
  background-image: linear-gradient(0deg, #0ba360 0% #3cba92 100%);
`

export const GrownEarly = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledGrownEarly {...props} ref={ref} />
})
