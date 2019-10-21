import styled from 'styled-components';
import { space, layout, color, flexbox } from 'styled-system';

//This will mainly be used to control max-width.
const ContentContainer = styled('div')(
  {
    display: "flex",
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  flexbox
)

export default ContentContainer;
