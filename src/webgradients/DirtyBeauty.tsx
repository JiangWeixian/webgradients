import React from 'react'
import styled from 'styled-components'

const StyledDirtyBeauty = styled.div`
  background-image: linear-gradient(0deg, #6a85b6 0% #bac8e0 100%);
`

export const DirtyBeauty = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledDirtyBeauty {...props} ref={ref} />
})
