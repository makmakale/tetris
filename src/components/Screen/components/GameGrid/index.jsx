import Cell from '@/components/Screen/components/Cell';
import {
  getFirstLunch, getGameOver, getStage, getTetrisIsOn,
} from '@/store/selectors';
import { StyledStage } from '@/styles/Stage';
import { useSelector } from 'react-redux';

function GameGrid() {
  const stage = useSelector(getStage);
  const isOn = useSelector(getTetrisIsOn);
  const firstLunch = useSelector(getFirstLunch);
  const isGameOver = useSelector(getGameOver);

  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {isOn && firstLunch ? <span>Welcome<br />Press start</span> : null}
      {isOn && isGameOver ? <span>Game Over</span> : null}
      {stage.map((row) => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  );
}

export default GameGrid;
