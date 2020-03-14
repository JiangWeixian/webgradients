import React from 'react'
import styled from 'styled-components'

const StyledMalibuBeach = styled.div`
  background-image: linear-gradient(0deg, #4facfe 0% #00f2fe 100%);
`

export const MalibuBeach = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMalibuBeach {...props} ref={ref} />
})
