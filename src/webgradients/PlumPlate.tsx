import React from 'react'
import styled from 'styled-components'

const StyledPlumPlate = styled.div`
  background-image: linear-gradient(135deg, #667eea 0% #764ba2 100%);
`

export const PlumPlate = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPlumPlate {...props} ref={ref} />
})
