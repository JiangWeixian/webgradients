import React from 'react'
import styled from 'styled-components'

const StyledPerfectWhite = styled.div`
  background-image: linear-gradient(-225deg, #e3fdf5 0% #ffe6fa 100%);
`

export const PerfectWhite = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPerfectWhite {...props} ref={ref} />
})
