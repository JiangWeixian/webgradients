import React from 'react'
import styled from 'styled-components'

const StyledFabledSunset = styled.div`
  background-image: linear-gradient(-225deg, #231557 0% #44107a 29% #ff1361 67%);
`

export const FabledSunset = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledFabledSunset {...props} ref={ref} />
})
