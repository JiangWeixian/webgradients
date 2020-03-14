import React from 'react'
import styled from 'styled-components'

const StyledNega = styled.div`
  background-image: linear-gradient(45deg, #ee9ca7 0% #ffdde1 100%);
`

export const Nega = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNega {...props} ref={ref} />
})
