import React from 'react'
import styled from 'styled-components'

const StyledFrozenBerry = styled.div`
  background-image: linear-gradient(0deg, #e8198b 0% #c7eafd 100%);
`

export const FrozenBerry = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFrozenBerry {...props} ref={ref} />
})
