import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const TitleContainer = styled.header`
  position: relative;
  width: 100%;
  height: 80px;
  box-shadow: inset 0 10px 20px rgba(255, 255, 255, 0.5),
  inset 0 -10px 20px rgba(0, 0, 0, 0.9);
  display: none;

  @media (min-width: ${mobileWidth}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
  position: relative;
  text-align: center;
  color: #ffffff;
  font-family: monospace;
  text-transform: uppercase;
  padding: 0 1.2rem;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 10rem;
    height: 6px;
    top: 50%;
    background: #ffffff;
  }

  &::before {
    left: 100%;
  }

  &::after {
    right: 100%;
  }
`;
