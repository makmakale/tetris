import { CELL_SIZE, MOBILE_CELL_SIZE } from '@/constants';
import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const StyledStage = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(${(props) => props.height}, ${MOBILE_CELL_SIZE}px);
  grid-template-columns: repeat(${(props) => props.width}, ${MOBILE_CELL_SIZE}px);
  grid-gap: 1px;
  border: 1px solid #333;
  width: 100%;
  padding: 2px;

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #748b7c;
    border: 2px solid #333;
    font-family: 'Seven Segment', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    padding: 5px;
    z-index: 1;
    width: 100px;
    font-size: .8rem;

    @media (min-width: ${mobileWidth}px) {
      font-size: unset;
      width: unset;
      padding: 10px 7px;
    }
  }

  @media (min-width: ${mobileWidth}px) {
    grid-template-rows: repeat(${(props) => props.height}, ${CELL_SIZE}px);
    grid-template-columns: repeat(${(props) => props.width}, ${CELL_SIZE}px);
  }
`;
