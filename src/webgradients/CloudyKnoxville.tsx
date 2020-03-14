import React from 'react'
import styled from 'styled-components'

const StyledCloudyKnoxville = styled.div`
  background-image: linear-gradient(120deg, #fdfbfb 0% #ebedee 100%);
`

export const CloudyKnoxville = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledCloudyKnoxville {...props} ref={ref} />
})
