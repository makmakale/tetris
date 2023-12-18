import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const StyledCell = styled.div`
  position: relative;
  background: #222;
  border: 2px solid #222;
  box-shadow: inset 1px 1px 0 1px #748b7c, inset -1px -1px 0 1px #748b7c;

  @media (min-width: ${mobileWidth}px) {
    box-shadow: inset 2px 2px 0 2px #748b7c, inset -2px -2px 0 2px #748b7c;
  }

  &.hidden {
    visibility: hidden;
  }

  &.Empty {
    opacity: .05;
  }
`;
