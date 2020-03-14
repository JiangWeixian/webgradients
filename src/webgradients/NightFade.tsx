import React from 'react'
import styled from 'styled-components'

const StyledNightFade = styled.div`
  background-image: linear-gradient(0deg, #a18cd1 0% #fbc2eb 100%);
`

export const NightFade = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNightFade {...props} ref={ref} />
})
