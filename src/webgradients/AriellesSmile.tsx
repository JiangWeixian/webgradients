import React from 'react'
import styled from 'styled-components'

const StyledAriellesSmile = styled.div`
  background-image: linear-gradient(0deg, #16d9e3 0% #30c7ec 47% #46aef7 100%);
`

export const AriellesSmile = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAriellesSmile {...props} ref={ref} />
})
