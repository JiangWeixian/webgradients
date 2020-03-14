import React from 'react'
import styled from 'styled-components'

const StyledSleeplessNight = styled.div`
  background-image: linear-gradient(-225deg, #5271c4 0% #b19fff 48% #eca1fe 100%);
`

export const SleeplessNight = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSleeplessNight {...props} ref={ref} />
})
