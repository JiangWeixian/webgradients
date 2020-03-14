import React from 'react'
import styled from 'styled-components'

const StyledRareWind = styled.div`
  background-image: linear-gradient(0deg, #a8edea 0% #fed6e3 100%);
`

export const RareWind = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledRareWind {...props} ref={ref} />
})
