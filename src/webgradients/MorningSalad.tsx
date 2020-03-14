import React from 'react'
import styled from 'styled-components'

const StyledMorningSalad = styled.div`
  background-image: linear-gradient(-225deg, #b7f8db 0% #50a7c2 100%);
`

export const MorningSalad = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMorningSalad {...props} ref={ref} />
})
