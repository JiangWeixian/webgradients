import React from 'react'
import styled from 'styled-components'

const StyledYoungPassion = styled.div`
  background-image: linear-gradient(
    90deg,
    #ff8177 0% #ff867a 0% #ff8c7f 21% #f99185 52% #cf556c 78% #b12a5b 100%
  );
`

export const YoungPassion = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledYoungPassion {...props} ref={ref} />
})
