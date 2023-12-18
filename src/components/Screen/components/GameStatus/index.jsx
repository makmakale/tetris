import InfoBlock from '@/components/common/InfoBlock';
import Time from '@/components/Screen/components/GameStatus/components/Time';
import UpcomingBlock from '@/components/Screen/components/GameStatus/components/UpcomingBlock';
import { LINE_POINTS } from '@/constants';
import {
  getClearedRows, getHiScore, getIsPaused, getLevel, getScore,
} from '@/store/selectors';
import { increaseRowsByValue, increaseScoreByValue } from '@/store/slicer';
import { StyledGameStatus } from '@/styles/GameStatus';
import { padValue } from '@/utils';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Status() {
  const score = useSelector(getScore);
  const hiScore = useSelector(getHiScore);
  const level = useSelector(getLevel);
  const isPaused = useSelector(getIsPaused);
  const rowsCleared = useSelector(getClearedRows);

  const dispatch = useDispatch();

  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      dispatch(increaseScoreByValue(LINE_POINTS[rowsCleared - 1] * (level + 1)));
      dispatch(increaseRowsByValue(rowsCleared));
    }
  }, [rowsCleared, dispatch, level]);

  useEffect(() => {
    calcScore();
  }, [rowsCleared, calcScore]);

  return (
    <StyledGameStatus>
      <InfoBlock
        title={level > 0 ? 'Score' : 'Hi-Score'}
        value={padValue(level > 0 ? score : hiScore, 5)}
      />

      <InfoBlock title="Next">
        <UpcomingBlock />
      </InfoBlock>

      <InfoBlock title="Level" value={padValue(level, 2)} />

      <InfoBlock>
        <div className={`pause ${isPaused ? 'paused' : ''}`}>
          <i className="bx bx-pause" />
        </div>
        <Time />
      </InfoBlock>
    </StyledGameStatus>
  );
}

export default Status;
