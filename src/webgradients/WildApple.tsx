import React from 'react'
import styled from 'styled-components'

const StyledWildApple = styled.div`
  background-image: linear-gradient(0deg, #d299c2 0% #fef9d7 100%);
`

export const WildApple = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledWildApple {...props} ref={ref} />
})
