import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const StyledTetrisBoard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(to right, #525356, #252526);
  border-radius: 0;
  overflow: hidden;
  min-width: 370px;
  min-height: 640px;
  height: 100vh;

  @media (min-width: ${mobileWidth}px) {
    border-radius: 16px;
    margin: 0 auto;
    height: unset;
  }
`;
