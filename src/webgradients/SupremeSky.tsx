import React from 'react'
import styled from 'styled-components'

const StyledSupremeSky = styled.div`
  background-image: linear-gradient(-225deg, #d4ffec 0% #57f2cc 48% #4596fb 100%);
`

export const SupremeSky = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSupremeSky {...props} ref={ref} />
})
