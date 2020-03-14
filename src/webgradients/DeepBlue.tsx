import React from 'react'
import styled from 'styled-components'

const StyledDeepBlue = styled.div`
  background-image: linear-gradient(120deg, #e0c3fc 0% #8ec5fc 100%);
`

export const DeepBlue = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledDeepBlue {...props} ref={ref} />
})
