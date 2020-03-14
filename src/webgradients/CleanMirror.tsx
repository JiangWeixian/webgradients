import React from 'react'
import styled from 'styled-components'

const StyledCleanMirror = styled.div`
  background-image: linear-gradient(45deg, #93a5cf 0% #e4efe9 100%);
`

export const CleanMirror = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledCleanMirror {...props} ref={ref} />
})
