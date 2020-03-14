import React from 'react'
import styled from 'styled-components'

const StyledSeashore = styled.div`
  background-image: linear-gradient(0deg, #209cff 0% #68e0cf 100%);
`

export const Seashore = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSeashore {...props} ref={ref} />
})
