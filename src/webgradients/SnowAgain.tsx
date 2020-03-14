import React from 'react'
import styled from 'styled-components'

const StyledSnowAgain = styled.div`
  background-image: linear-gradient(0deg, #e6e9f0 0% #eef1f5 100%);
`

export const SnowAgain = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSnowAgain {...props} ref={ref} />
})
