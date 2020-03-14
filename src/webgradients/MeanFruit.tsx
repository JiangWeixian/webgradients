import React from 'react'
import styled from 'styled-components'

const StyledMeanFruit = styled.div`
  background-image: linear-gradient(120deg, #fccb90 0% #d57eeb 100%);
`

export const MeanFruit = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMeanFruit {...props} ref={ref} />
})
