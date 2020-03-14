import React from 'react'
import styled from 'styled-components'

const StyledSeaLord = styled.div`
  background-image: linear-gradient(-225deg, #2cd8d5 0% #c5c1ff 56% #ffbac3 100%);
`

export const SeaLord = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSeaLord {...props} ref={ref} />
})
