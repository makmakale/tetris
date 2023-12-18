import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const TetrisDivider = styled.div`
  width: 100%;
  height: 80px;
  box-shadow: inset 0 10px 20px rgba(255, 255, 255, 0.5), inset 0 -10px 20px rgba(0, 0, 0, 0.9);
  transition: 400ms;
  display: none;

  @media (min-width: ${mobileWidth}px) {
    display: flex;
  }
`;
