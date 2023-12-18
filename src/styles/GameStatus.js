import { CELL_SIZE, MOBILE_CELL_SIZE } from '@/constants';
import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const StyledGameStatus = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  font-family: 'Seven Segment', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
`;

export const InfoBlockContainer = styled.div`
  width: 100%;
  text-align: right;

  .upcoming {
    height: 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media (min-width: ${mobileWidth}px) {
      height: 80px;
    }
  }

  &:last-child {
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    .pause {
      opacity: .2;

      i {
        font-size: 1.4rem;
      }

      &.paused {
        opacity: 1;
      }
    }
  }
`;

export const UpcomingBlockGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(${(props) => props.height}, ${MOBILE_CELL_SIZE}px);
  grid-template-columns: repeat(${(props) => props.width}, ${MOBILE_CELL_SIZE}px);
  grid-gap: 1px;
  width: 100%;
  background: #748b7c;
  place-content: end;

  @media (min-width: ${mobileWidth}px) {
    grid-template-rows: repeat(${(props) => props.height}, ${CELL_SIZE}px);
    grid-template-columns: repeat(${(props) => props.width}, ${CELL_SIZE}px);
  }
`;

export const InfoBlockTitle = styled.div`
  font-size: .8rem;
  margin-bottom: 10px;

`;

export const InfoBlockValue = styled.div`
  font-size: 1.2rem;

  @media (min-width: ${mobileWidth}px) {
    font-size: 1.8rem;
  }
`;
