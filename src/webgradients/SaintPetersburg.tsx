import React from 'react'
import styled from 'styled-components'

const StyledSaintPetersburg = styled.div`
  background-image: linear-gradient(135deg, #f5f7fa 0% #c3cfe2 100%);
`

export const SaintPetersburg = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSaintPetersburg {...props} ref={ref} />
})
