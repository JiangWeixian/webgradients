import React from 'react'
import styled from 'styled-components'

const StyledLilyMeadow = styled.div`
  background-image: linear-gradient(-225deg, #65379b 0% #886aea 53% #6457c6 100%);
`

export const LilyMeadow = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledLilyMeadow {...props} ref={ref} />
})
