import React from 'react'
import styled from 'styled-components'

const StyledPhoenixStart = styled.div`
  background-image: linear-gradient(0deg, #f83600 0% #f9d423 100%);
`

export const PhoenixStart = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledPhoenixStart {...props} ref={ref} />
})
