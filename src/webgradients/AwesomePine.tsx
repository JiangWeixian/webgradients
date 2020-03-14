import React from 'react'
import styled from 'styled-components'

const StyledAwesomePine = styled.div`
  background-image: linear-gradient(0deg, #ebbba7 0% #cfc7f8 100%);
`

export const AwesomePine = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAwesomePine {...props} ref={ref} />
})
