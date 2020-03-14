import React from 'react'
import styled from 'styled-components'

const StyledAngelCare = styled.div`
  background-image: linear-gradient(-225deg, #ffe29f 0% #ffa99f 48% #ff719a 100%);
`

export const AngelCare = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAngelCare {...props} ref={ref} />
})
