import React from 'react'
import styled from 'styled-components'

const StyledKindSteel = styled.div`
  background-image: linear-gradient(-20deg, #e9defa 0% #fbfcdb 100%);
`

export const KindSteel = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledKindSteel {...props} ref={ref} />
})
