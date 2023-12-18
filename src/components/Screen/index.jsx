import GameGrid from '@/components/Screen/components/GameGrid';
import Status from '@/components/Screen/components/GameStatus';
import { getTetrisIsOn } from '@/store/selectors';
import { Screen, ScreenBorder, ScreenShadow } from '@/styles/Screen';
import { useSelector } from 'react-redux';

function GameScreen() {
  const isOn = useSelector(getTetrisIsOn);

  return (
    <ScreenShadow>
      <ScreenBorder>
        <Screen>
          {isOn ? (
            <>
              <GameGrid />
              <Status />
            </>
          ) : null}
        </Screen>
      </ScreenBorder>
    </ScreenShadow>
  );
}

export default GameScreen;
