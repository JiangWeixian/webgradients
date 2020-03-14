import React from 'react'
import styled from 'styled-components'

const StyledMorpheusDen = styled.div`
  background-image: linear-gradient(0deg, #30cfd0 0% #330867 100%);
`

export const MorpheusDen = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMorpheusDen {...props} ref={ref} />
})
