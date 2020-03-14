import React from 'react'
import styled from 'styled-components'

const StyledPassionateBed = styled.div`
  background-image: linear-gradient(0deg, #ff758c 0% #ff7eb3 100%);
`

export const PassionateBed = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPassionateBed {...props} ref={ref} />
})
