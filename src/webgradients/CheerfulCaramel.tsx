import React from 'react'
import styled from 'styled-components'

const StyledCheerfulCaramel = styled.div`
  background-image: linear-gradient(0deg, #e6b980 0% #eacda3 100%);
`

export const CheerfulCaramel = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledCheerfulCaramel {...props} ref={ref} />
})
