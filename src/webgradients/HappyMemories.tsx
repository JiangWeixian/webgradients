import React from 'react'
import styled from 'styled-components'

const StyledHappyMemories = styled.div`
  background-image: linear-gradient(-60deg, #ff5858 0% #f09819 100%);
`

export const HappyMemories = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledHappyMemories {...props} ref={ref} />
})
