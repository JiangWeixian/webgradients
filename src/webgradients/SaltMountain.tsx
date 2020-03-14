import React from 'react'
import styled from 'styled-components'

const StyledSaltMountain = styled.div`
  background-image: linear-gradient(-225deg, #fffeff 0% #d7fffe 100%);
`

export const SaltMountain = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledSaltMountain {...props} ref={ref} />
})
