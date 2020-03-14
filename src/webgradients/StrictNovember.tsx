import React from 'react'
import styled from 'styled-components'

const StyledStrictNovember = styled.div`
  background-image: linear-gradient(-225deg, #cbbacc 0% #2580b3 100%);
`

export const StrictNovember = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledStrictNovember {...props} ref={ref} />
})
