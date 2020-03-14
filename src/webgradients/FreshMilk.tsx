import React from 'react'
import styled from 'styled-components'

const StyledFreshMilk = styled.div`
  background-image: linear-gradient(0deg, #feada6 0% #f5efef 100%);
`

export const FreshMilk = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFreshMilk {...props} ref={ref} />
})
