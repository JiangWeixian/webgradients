import React from 'react'
import styled from 'styled-components'

const StyledNorseBeauty = styled.div`
  background-image: linear-gradient(0deg, #ec77ab 0% #7873f5 100%);
`

export const NorseBeauty = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledNorseBeauty {...props} ref={ref} />
})
