import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

const Box = styled.div(
  {
    display: "flex",
    boxSizing: 'border-box',
    minWidth: 0,

  },
  space,
  color,
  layout,
  flexbox
)

export default Box
