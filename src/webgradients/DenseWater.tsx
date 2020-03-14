import React from 'react'
import styled from 'styled-components'

const StyledDenseWater = styled.div`
  background-image: linear-gradient(0deg, #3ab5b0 0% #3d99be 31% #56317a 100%);
`

export const DenseWater = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledDenseWater {...props} ref={ref} />
})
