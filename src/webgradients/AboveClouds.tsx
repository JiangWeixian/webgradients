import React from 'react'
import styled from 'styled-components'

const StyledAboveClouds = styled.div`
  background-image: linear-gradient(0deg, #bdbbbe 0% #9d9ea3 100%);
`

export const AboveClouds = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAboveClouds {...props} ref={ref} />
})