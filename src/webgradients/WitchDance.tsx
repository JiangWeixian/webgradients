import React from 'react'
import styled from 'styled-components'

const StyledWitchDance = styled.div`
  background-image: linear-gradient(-225deg, #a8bfff 0% #884d80 100%);
`

export const WitchDance = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledWitchDance {...props} ref={ref} />
})
