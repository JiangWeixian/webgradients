import React from 'react'
import styled from 'styled-components'

const StyledPerfectBlue = styled.div`
  background-image: linear-gradient(-225deg, #3d4e81 0% #5753c9 48% #6e7ff3 100%);
`

export const PerfectBlue = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPerfectBlue {...props} ref={ref} />
})
