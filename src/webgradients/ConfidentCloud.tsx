import React from 'react'
import styled from 'styled-components'

const StyledConfidentCloud = styled.div`
  background-image: linear-gradient(0deg, #dad4ec 0% #dad4ec 1% #f3e7e9 100%);
`

export const ConfidentCloud = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledConfidentCloud {...props} ref={ref} />
})
