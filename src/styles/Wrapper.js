import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  @media (min-width: ${mobileWidth}px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(${(props) => props.bgImgUrl}) no-repeat;
    background-size: cover;
  }
`;
