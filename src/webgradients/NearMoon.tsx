import React from 'react'
import styled from 'styled-components'

const StyledNearMoon = styled.div`
  background-image: linear-gradient(0deg, #5ee7df 0% #b490ca 100%);
`

export const NearMoon = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNearMoon {...props} ref={ref} />
})
