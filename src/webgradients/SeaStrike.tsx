import React from 'react'
import styled from 'styled-components'

const StyledSeaStrike = styled.div`
  background-image: linear-gradient(-225deg, #77ffd2 0% #6297db 48% #1eecff 100%);
`

export const SeaStrike = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSeaStrike {...props} ref={ref} />
})
