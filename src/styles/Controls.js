import { mobileWidth } from '@/styles/_media';
import styled from 'styled-components';

export const Controls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10vw 10vw;

  @media (min-width: ${mobileWidth}px) {
    padding: 0 5rem 5rem;
  }
`;

export const StyledButton = styled.button.attrs({ type: 'button' })`
  background: #e7cb15;
  border-radius: 50%;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, .3),
  inset 2px 2px 3px rgba(255, 255, 255, .5),
    inset -5px -5px 5px rgba(0, 0, 0, .15);
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ButtonGroup = styled.div`
  align-self: end;
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 8px;
  border-radius: 30px;
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .5),
    inset -2px -2px 3px rgba(255, 255, 255, .3);

  @media (min-width: ${mobileWidth}px) {
    gap: 30px;
  }

  > div {
    position: relative;
    display: flex;

    .button {
      width: 22px;
      height: 22px;

      @media (min-width: ${mobileWidth}px) {
        width: 30px;
        height: 30px;
      }

      &.reset {
        background: #e71010;
      }
    }

    span {
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
      width: 60px;
      margin-top: 10px;
      font-family: monospace;
      color: #ffffff;
      text-align: center;
      user-select: none;
      font-size: .7rem;

      @media (min-width: ${mobileWidth}px) {
        font-size: unset;
      }
    }
  }
`;

export const ControlsButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  width: 100%;

  @media (min-width: ${mobileWidth}px) {
    margin-top: 80px;
  }
`;

export const ControlKeys = styled.div`
  align-self: start;
  display: grid;
  grid-template-areas: 
          ". btnUp ."
          "btnLeft icon btnRight"
          ". btnDown .";
  grid-template-columns: repeat(3, 40px);
  position: relative;

  @media (min-width: ${mobileWidth}px) {
    grid-template-columns: repeat(3, 50px);
  }

  &::after {
    position: absolute;
    content: '';
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: linear-gradient(to right, #4f5054, #404043);
    width: 86px;
    height: 86px;
    border-radius: 50%;
    z-index: 2;

    @media (min-width: ${mobileWidth}px) {
      width: 96px;
      height: 96px;
    }
  }

  .icon {
    grid-area: icon;
    color: #fff;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      all: unset;
    }

    &::after {
      all: unset;
    }
  }

  i.bx {
    font-size: 2rem;

    @media (min-width: ${mobileWidth}px) {
      font-size: 2.6rem;
    }
  }
`;

export const ControlKeyShape = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: '';
    width: 60px;
    height: 60px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .5), inset -2px -2px 3px rgba(255, 255, 255, .3);

    @media (min-width: ${mobileWidth}px) {
      width: 70px;
      height: 70px;
    }
  }

  .button {
    position: relative;
    width: 40px;
    height: 40px;
    z-index: 4;

    @media (min-width: ${mobileWidth}px) {
      width: 50px;
      height: 50px;
    }
  }

  &.up {
    grid-area: btnUp;

    &::before {
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
    }
  }

  &.left {
    grid-area: btnLeft;

    &::before {
      border-top-left-radius: 40px;
      border-bottom-left-radius: 40px;
    }
  }

  &.right {
    grid-area: btnRight;

    &::before {
      border-top-right-radius: 40px;
      border-bottom-right-radius: 40px;
    }
  }

  &.down {
    grid-area: btnDown;

    &::before {
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;
    }
  }
`;

export const RotateButton = styled(StyledButton)`
  position: relative;
  width: 80px;
  height: 80px;

  @media (min-width: ${mobileWidth}px) {
    width: 100px;
    height: 100px;
  }

  &::before {
    position: absolute;
    content: '';
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .5), inset -2px -2px 3px rgba(255, 255, 255, .3);

    @media (min-width: ${mobileWidth}px) {
      width: 120px;
      height: 120px;
    }
  }

  i {
    font-size: 2.6rem;
  }
`;
