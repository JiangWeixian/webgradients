import React from 'react'
import styled from 'styled-components'

const {{ styledname }} = styled.div`
  background-image: linear-gradient({{ deg }}, {{ colors }});
`

export const {{ name }} = React.forwardRef<HTMLDivElement, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>((props, ref) => {
  return (
    <{{ styledname }} {...props} ref={ref} />
  )
})
