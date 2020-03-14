import React from 'react'
import styled from 'styled-components'

const StyledBlessing = styled.div`
  background-image: linear-gradient(0deg, #fddb92 0% #d1fdff 100%);
`

export const Blessing = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledBlessing {...props} ref={ref} />
})
