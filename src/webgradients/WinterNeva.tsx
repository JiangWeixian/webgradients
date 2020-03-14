import React from 'react'
import styled from 'styled-components'

const StyledWinterNeva = styled.div`
  background-image: linear-gradient(120deg, #a1c4fd 0% #c2e9fb 100%);
`

export const WinterNeva = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledWinterNeva {...props} ref={ref} />
})
