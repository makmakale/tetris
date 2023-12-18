import { SCREEN_BORDER_WIDTH } from '@/constants';
import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const ScreenShadow = styled.div`
  position: relative;
  border-radius: 4px;
  padding: 4px;
  overflow: hidden;
  z-index: 1;
  margin-top: 1rem;
  width: 80vw;
  height: 370px;

  &::before {
    position: absolute;
    content: '';
    left: -4px;
    top: -4px;
    right: -4px;
    bottom: -4px;
    background: repeating-conic-gradient(from 40deg,
    rgba(255, 255, 255, .3) 0%,
    rgba(0, 0, 0, .5) 5%,
    rgba(0, 0, 0, .5) 40%,
    rgba(255, 255, 255, .3) 50%);
    filter: drop-shadow(0 15px 50px #000);
  }

  &::after {
    position: absolute;
    content: '';
    left: -4px;
    top: -4px;
    right: -4px;
    bottom: -4px;
    background: repeating-conic-gradient(from -40deg,
    rgba(255, 255, 255, .3) 0%,
    transparent 5%,
    transparent 40%,
    rgba(255, 255, 255, .3) 50%);
    filter: drop-shadow(0 15px 50px #000);
  }

  @media (min-width: ${mobileWidth}px) {
    margin-top: unset;
    margin-left: 5rem;
    margin-right: 5rem;
    width: unset;
    height: unset;
  }
`;

export const ScreenBorder = styled.div`
  position: relative;
  background: #748b7c;
  border-width: ${SCREEN_BORDER_WIDTH}px;
  border-style: solid;
  border-top-color: #252526;
  border-left-color: #252526;
  border-right-color: #eee;
  border-bottom-color: #eee;
  border-radius: 4px;
  z-index: 2;
  height: 100%;

  &::before {
    position: absolute;
    content: '';
    bottom: -20px;
    right: -20px;
    width: 20px;
    height: 20px;
    background: linear-gradient(to top right,
    transparent 50%,
    rgba(0, 0, 0, .5) 50%,
    transparent 52%);
  }
`;

export const Screen = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  padding: 10px 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (min-width: ${mobileWidth}px) {
    padding: 12px 10px;
    width: 330px;
    height: 448px;
  }
`;
