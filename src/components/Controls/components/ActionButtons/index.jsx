import ActionButton from '@/components/common/ActionButton';
import { getIsPlaying, getTetrisIsOn } from '@/store/selectors';
import {
  pauseGame, resetGame, resetPlayer, startGame, turnOff, turnOn,
} from '@/store/slicer';
import { ButtonGroup } from '@/styles/Controls';
import { useDispatch, useSelector } from 'react-redux';

function ActionButtons() {
  const isOn = useSelector(getTetrisIsOn);
  const isPlaying = useSelector(getIsPlaying);

  const dispatch = useDispatch();

  const dispatchTurnOn = () => dispatch(turnOn());
  const dispatchTurnOff = () => dispatch(turnOff());
  const dispatchStartGame = () => {
    dispatch(startGame());
    dispatch(resetPlayer());
  };
  const dispatchPauseGame = () => dispatch(pauseGame());
  const dispatchResetGame = () => dispatch(resetGame());

  return (
    <ButtonGroup>
      <ActionButton title="On<br />Off" onClick={isOn ? dispatchTurnOff : dispatchTurnOn} />
      <ActionButton title="Pause<br />Start" onClick={isPlaying ? dispatchPauseGame : dispatchStartGame} />
      <ActionButton title="Reset" onClick={dispatchResetGame} className="reset" />
    </ButtonGroup>
  );
}

export default ActionButtons;
