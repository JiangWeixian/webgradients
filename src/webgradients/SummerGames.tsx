import React from 'react'
import styled from 'styled-components'

const StyledSummerGames = styled.div`
  background-image: linear-gradient(0deg, #92fe9d 0% #00c9ff 100%);
`

export const SummerGames = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSummerGames {...props} ref={ref} />
})
