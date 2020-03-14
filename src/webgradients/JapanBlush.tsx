import React from 'react'
import styled from 'styled-components'

const StyledJapanBlush = styled.div`
  background-image: linear-gradient(-20deg, #ddd6f3 0% #faaca8 100% #faaca8 100%);
`

export const JapanBlush = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledJapanBlush {...props} ref={ref} />
})
