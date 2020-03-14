import React from 'react'
import styled from 'styled-components'

const StyledItmeoBranding = styled.div`
  background-image: linear-gradient(180deg, #2af598 0% #009efd 100%);
`

export const ItmeoBranding = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledItmeoBranding {...props} ref={ref} />
})
