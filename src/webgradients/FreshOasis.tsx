import React from 'react'
import styled from 'styled-components'

const StyledFreshOasis = styled.div`
  background-image: linear-gradient(-225deg, #7de2fc 0% #b9b6e5 100%);
`

export const FreshOasis = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFreshOasis {...props} ref={ref} />
})
