import React from 'react'
import styled from 'styled-components'

const StyledAmyCrisp = styled.div`
  background-image: linear-gradient(120deg, #a6c0fe 0% #f68084 100%);
`

export const AmyCrisp = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledAmyCrisp {...props} ref={ref} />
})
