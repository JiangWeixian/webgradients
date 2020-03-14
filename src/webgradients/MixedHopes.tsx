import React from 'react'
import styled from 'styled-components'

const StyledMixedHopes = styled.div`
  background-image: linear-gradient(0deg, #c471f5 0% #fa71cd 100%);
`

export const MixedHopes = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMixedHopes {...props} ref={ref} />
})
