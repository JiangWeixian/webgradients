import React from 'react'
import styled from 'styled-components'

const StyledCloudyApple = styled.div`
  background-image: linear-gradient(0deg, #f3e7e9 0% #e3eeff 99% #e3eeff 100%);
`

export const CloudyApple = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledCloudyApple {...props} ref={ref} />
})
