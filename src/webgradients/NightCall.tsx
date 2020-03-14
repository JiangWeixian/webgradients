import React from 'react'
import styled from 'styled-components'

const StyledNightCall = styled.div`
  background-image: linear-gradient(-225deg, #ac32e4 0% #7918f2 48% #4801ff 100%);
`

export const NightCall = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNightCall {...props} ref={ref} />
})
