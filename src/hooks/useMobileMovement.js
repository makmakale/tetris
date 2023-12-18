import { getLevel } from '@/store/selectors';
import {
  moveDown, movePlayer, resetDropTime, rotatePlayer, setDefaultDropTime, setDropTime,
} from '@/store/slicer';
import { getIntervalByLevel } from '@/utils';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useMobileMovement = () => {
  const level = useSelector(getLevel);
  const dispatch = useDispatch();

  const intervalRef = useRef(null);

  const startDropping = () => {
    if (intervalRef.current) return;
    dispatch(resetDropTime());
    intervalRef.current = setInterval(() => {
      dispatch(moveDown());
    }, 50);
  };

  const stopDropping = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      dispatch(setDefaultDropTime());
    }
  };

  const speedDrop = () => {
    dispatch(setDropTime(1));
  };

  const backToNormalSpeed = () => {
    dispatch(setDropTime(getIntervalByLevel(level)));
  };

  const move = (dir) => {
    dispatch(movePlayer(dir));
  };

  const rotate = () => {
    dispatch(rotatePlayer());
  };

  return {
    startDropping, stopDropping, speedDrop, backToNormalSpeed, move, rotate,
  };
};
