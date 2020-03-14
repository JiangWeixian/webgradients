import React from 'react'
import styled from 'styled-components'

const StyledForestInei = styled.div`
  background-image: linear-gradient(0deg, #df89b5 0% #bfd9fe 100%);
`

export const ForestInei = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledForestInei {...props} ref={ref} />
})
