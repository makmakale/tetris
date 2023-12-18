import {
  moveDown, movePlayer, resetDropTime, rotatePlayer, setDefaultDropTime,
} from '@/store/slicer';
import { useDispatch } from 'react-redux';

export const useMovement = () => {
  const dispatch = useDispatch();

  const drop = () => {
    dispatch(moveDown());
  };

  const onKeyUp = (event) => {
    if (event.key === 'ArrowDown') {
      dispatch(setDefaultDropTime());
    }
  };

  const dropPlayer = () => {
    dispatch(resetDropTime());
    drop();
  };

  const move = (event) => {
    if (event.key === 'ArrowLeft') {
      dispatch(movePlayer(-1));
    } else if (event.key === 'ArrowRight') {
      dispatch(movePlayer(1));
    } else if (event.key === 'ArrowDown') {
      dropPlayer();
    } else if (event.key === 'ArrowUp') {
      dispatch(rotatePlayer());
    }
  };

  return { drop, move, onKeyUp };
};
