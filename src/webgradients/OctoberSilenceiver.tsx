import React from 'react'
import styled from 'styled-components'

const StyledOctoberSilenceiver = styled.div`
  background-image: linear-gradient(-20deg, #b721ff 0% #21d4fd 100%);
`

export const OctoberSilenceiver = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledOctoberSilenceiver {...props} ref={ref} />
})
