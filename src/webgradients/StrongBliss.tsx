import React from 'react'
import styled from 'styled-components'

const StyledStrongBliss = styled.div`
  background-image: linear-gradient(0deg, #f78ca0 0% #f9748f 19% #fd868c 60%);
`

export const StrongBliss = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledStrongBliss {...props} ref={ref} />
})
