import React from 'react'
import styled from 'styled-components'

const StyledHappyUnicorn = styled.div`
  background-image: linear-gradient(0deg, #b3ffab 0% #12fff7 100%);
`

export const HappyUnicorn = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHappyUnicorn {...props} ref={ref} />
})
