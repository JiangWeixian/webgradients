import React from 'react'
import styled from 'styled-components'

const StyledMindCrawl = styled.div`
  background-image: linear-gradient(-225deg, #473b7b 0% #3584a7 51% #30d2be 100%);
`

export const MindCrawl = React.forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>((props, ref) => {
  return <StyledMindCrawl {...props} ref={ref} />
})
