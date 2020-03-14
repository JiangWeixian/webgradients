import React from 'react'
import styled from 'styled-components'

const StyledSoftLipstick = styled.div`
  background-image: linear-gradient(-225deg, #b6cee8 0% #f578dc 100%);
`

export const SoftLipstick = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSoftLipstick {...props} ref={ref} />
})
