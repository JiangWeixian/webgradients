import React from 'react'
import styled from 'styled-components'

const StyledChildCare = styled.div`
  background-image: linear-gradient(-20deg, #f794a4 0% #fdd6bd 100%);
`

export const ChildCare = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledChildCare {...props} ref={ref} />
})
