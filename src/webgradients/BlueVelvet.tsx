import React from 'react'
import styled from 'styled-components'

const StyledBlueVelvet = styled.div`
  background-image: linear-gradient(0deg, #6a11cb 0% #2575fc 100%);
`

export const BlueVelvet = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledBlueVelvet {...props} ref={ref} />
})
