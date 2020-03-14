import React from 'react'
import styled from 'styled-components'

const StyledNorthMiracle = styled.div`
  background-image: linear-gradient(0deg, #00dbde 0% #fc00ff 100%);
`

export const NorthMiracle = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNorthMiracle {...props} ref={ref} />
})
