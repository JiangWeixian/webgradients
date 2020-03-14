import React from 'react'
import styled from 'styled-components'

const StyledDeepRelief = styled.div`
  background-image: linear-gradient(-225deg, #7085b6 0% #87a7d9 50% #def3f8 100%);
`

export const DeepRelief = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledDeepRelief {...props} ref={ref} />
})
