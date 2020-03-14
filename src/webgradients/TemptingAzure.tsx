import React from 'react'
import styled from 'styled-components'

const StyledTemptingAzure = styled.div`
  background-image: linear-gradient(120deg, #84fab0 0% #8fd3f4 100%);
`

export const TemptingAzure = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledTemptingAzure {...props} ref={ref} />
})
