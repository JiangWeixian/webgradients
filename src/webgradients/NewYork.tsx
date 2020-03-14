import React from 'react'
import styled from 'styled-components'

const StyledNewYork = styled.div`
  background-image: linear-gradient(0deg, #fff1eb 0% #ace0f9 100%);
`

export const NewYork = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNewYork {...props} ref={ref} />
})
