import React from 'react'
import styled from 'styled-components'

const StyledSunnyMorning = styled.div`
  background-image: linear-gradient(120deg, #f6d365 0% #fda085 100%);
`

export const SunnyMorning = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSunnyMorning {...props} ref={ref} />
})
