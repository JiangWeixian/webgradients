import React from 'react'
import styled from 'styled-components'

const StyledRichMetal = styled.div`
  background-image: linear-gradient(0deg, #d7d2cc 0% #304352 100%);
`

export const RichMetal = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRichMetal {...props} ref={ref} />
})
