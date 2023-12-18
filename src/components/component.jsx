import Controls from '@/components/Controls';
import Header from '@/components/Header';
import GameScreen from '@/components/Screen';
import { useInterval } from '@/hooks/useInterval';
import { useMovement } from '@/hooks/useMovement';
import { StyledTetrisBoard } from '@/styles/TetrisBoard';
import { Wrapper } from '@/styles/Wrapper';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import bgImg from '../../public/images/bg.jpg';

function GameComponent({
  player, stage, dropTime, updateStage, setStage,
}) {
  const { drop, move, onKeyUp } = useMovement();

  useInterval(() => {
    drop();
  }, dropTime);

  useEffect(() => {
    setStage(updateStage(player, stage));
  }, [player]);

  return (
    <Wrapper role="button" tabIndex="0" onKeyDown={move} onKeyUp={onKeyUp} bgImgUrl={bgImg}>
      <StyledTetrisBoard>
        <Header />
        <GameScreen />
        <Controls />
      </StyledTetrisBoard>
    </Wrapper>
  );
}

GameComponent.propTypes = {
  player: PropTypes.shape({
    pos: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    shape: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      ),
    ),
    collided: PropTypes.bool,
  }),
  stage: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      ),
    ),
  ),
  dropTime: PropTypes.number,
  setStage: PropTypes.func.isRequired,
  updateStage: PropTypes.func.isRequired,
};

GameComponent.defaultProps = {
  player: null,
  dropTime: null,
  stage: [],
};

export default GameComponent;
