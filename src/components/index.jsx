import GameComponent from '@/components/component';
import { getPlayer, getStage } from '@/store/selectors';
import {
  increaseClearedRows, resetClearedRows, resetPlayer, setStage,
} from '@/store/slicer';
import { sweepRows } from '@/utils';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  player: getPlayer(state),
  stage: getStage(state),
  dropTime: state.dropTime,
});

const mapDispatchToProps = (dispatch) => ({
  updateStage: (player, state) => {
    dispatch(resetClearedRows());

    const newStage = state.map((row) => row.map((cell) => (cell[1] === 'clear' ? [0, 'clear'] : cell)));

    player.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          const yPos = y + player.pos.y;
          const xPos = x + player.pos.x;
          newStage[yPos][xPos] = [value, `${player.collided ? 'merged' : 'clear'}`];
        }
      });
    });

    if (player.collided) {
      dispatch(resetPlayer());
      return sweepRows(newStage, () => dispatch(increaseClearedRows()));
    }

    return newStage;
  },
  setStage: (stage) => dispatch(setStage(stage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
