import { BOARD_WIDTH, SHAPES } from '@/constants';
import {
  checkCollision,
  createStage,
  getHiScore,
  getIntervalByLevel,
  getRandomUpcomingBlock,
  rotate,
  updatePlayerPos,
} from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOn: false,
  firstLunch: true,
  isPlaying: false,
  isPaused: false,
  isGameOver: false,
  dropTime: null,
  player: {
    pos: { x: 0, y: 0 },
    shape: SHAPES[0].shape,
    collided: false,
  },
  upcomingBlock: [],
  stage: [],
  rowsCleared: 0,
  score: 0,
  hiScore: 0,
  level: 0,
  rows: 0,
};

export const tetrisSlice = createSlice({
  name: 'tetris',
  initialState,
  reducers: {
    setDropTime: (state, action) => {
      state.dropTime = action.payload;
    },
    increaseScoreByValue: (state, action) => {
      state.score += action.payload;
    },
    increaseRowsByValue: (state, action) => {
      state.rows += action.payload;
    },
    setDefaultDropTime: (state) => {
      state.dropTime = getIntervalByLevel(state.level);
    },
    resetDropTime: (state) => {
      state.dropTime = null;
    },
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    resetClearedRows: (state) => {
      state.rowsCleared = 0;
    },
    increaseClearedRows: (state) => {
      state.rowsCleared += 1;
    },
    turnOn: (state) => {
      state.isOn = true;
      state.stage = createStage(true);
      state.upcomingBlock = getRandomUpcomingBlock();
    },
    turnOff: (state) => {
      state.isOn = false;
      state.level = 0;
      state.score = 0;
      state.rows = 0;
      state.dropTime = null;
      state.isPlaying = false;
      state.isPaused = false;
      state.firstLunch = true;
      state.isGameOver = false;
    },
    startGame: (state) => {
      if (!state.isOn) return;

      state.firstLunch = false;
      state.stage = createStage();
      state.dropTime = 1000;
      state.isPlaying = true;
      state.isPaused = false;
      state.level = 1;
      state.isGameOver = false;
    },
    resetPlayer: (state) => {
      state.player = {
        pos: { x: BOARD_WIDTH / 2 - 2, y: 0 },
        shape: state.upcomingBlock,
        collided: false,
      };
      state.upcomingBlock = getRandomUpcomingBlock();
      state.dropTime = getIntervalByLevel(state.level);
    },
    pauseGame: (state) => {
      if (!state.isOn || state.isGameOver) return;

      if (state.isPaused) {
        state.isPaused = false;
        state.dropTime = getIntervalByLevel(state.level);
      } else {
        state.isPaused = true;
        state.dropTime = null;
      }
    },
    resetGame: (state) => {
      if (!state.isOn || state.firstLunch) return;

      state.isPlaying = false;
      state.dropTime = null;
      state.level = 0;
      state.score = 0;
      state.rows = 0;
      state.stage = createStage();
      state.upcomingBlock = getRandomUpcomingBlock();
      state.isGameOver = false;
    },
    // controls
    movePlayer: (state, action) => {
      if (!state.isOn || !state.isPlaying || state.isPaused || state.isGameOver) return;

      if (!checkCollision(state.player, state.stage, { x: action.payload, y: 0 })) {
        state.player = updatePlayerPos(state.player, { x: action.payload, y: 0 });
      }
    },
    moveDown: (state) => {
      if (!state.isOn || !state.isPlaying || state.isPaused || state.isGameOver) {
        return;
      }

      if (state.rows > state.level * 10) {
        state.level += 1;
        state.dropTime = getIntervalByLevel(state.level);
      }

      if (!checkCollision(state.player, state.stage, { x: 0, y: 1 })) {
        state.player = updatePlayerPos(state.player, { x: 0, y: 1, collided: false });
      } else {
        if (state.player.pos.y < 1) {
          state.dropTime = null;
          state.isGameOver = true;
          state.isPlaying = false;
          const hiScore = getHiScore(state.score);
          state.hiScore = hiScore;
          localStorage.setItem('Tetris:hi-score', JSON.stringify(hiScore));
        }
        state.player = updatePlayerPos(state.player, { x: 0, y: 0, collided: true });
      }
    },
    rotatePlayer: (state) => {
      if (!state.isOn || !state.isPlaying || state.isPaused || state.isGameOver) return;

      const clonePlayer = JSON.parse(JSON.stringify(state.player));
      clonePlayer.shape = rotate(clonePlayer.shape, 1);

      const pos = clonePlayer.pos.x;
      let offset = 1;
      while (checkCollision(clonePlayer, state.stage, { x: 0, y: 0 })) {
        clonePlayer.pos.x += offset;
        offset = -(offset + (offset > 0 ? 1 : -1));
        if (offset > clonePlayer.shape[0].length) {
          rotate(clonePlayer.shape, -1);
          clonePlayer.pos.x = pos;
          return;
        }
      }

      state.player = clonePlayer;
    },
  },
});

export const {
  setDropTime, setDefaultDropTime, resetDropTime, setStage,
  turnOn, turnOff, startGame, resetPlayer, pauseGame, resetGame,
  rotatePlayer, resetClearedRows, increaseClearedRows,
  movePlayer, moveDown, increaseScoreByValue, increaseRowsByValue,
} = tetrisSlice.actions;

export default tetrisSlice.reducer;
