import React from 'react'
import styled from 'styled-components'

const StyledNewRetrowave = styled.div`
  background-image: linear-gradient(0deg, #3b41c5 0% #a981bb 49% #ffc8a9 100%);
`

export const NewRetrowave = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNewRetrowave {...props} ref={ref} />
})
