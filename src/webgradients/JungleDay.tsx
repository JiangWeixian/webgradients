import React from 'react'
import styled from 'styled-components'

const StyledJungleDay = styled.div`
  background-image: linear-gradient(45deg, #8baaaa 0% #ae8b9c 100%);
`

export const JungleDay = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledJungleDay {...props} ref={ref} />
})
