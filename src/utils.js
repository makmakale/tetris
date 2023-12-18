import { BOARD_HEIGHT, BOARD_WIDTH, SHAPES } from '@/constants';

export function createStage(filled = false) {
  return Array.from(Array(BOARD_HEIGHT), () => new Array(BOARD_WIDTH).fill([filled ? 1 : 0, 'clear']));
}

export function randomShape() {
  const shapes = 'IJLOSTZ';
  const randShape = shapes[Math.floor(Math.random() * shapes.length)];
  return SHAPES[randShape];
}

export function checkCollision(player, stage, { x: moveX, y: moveY }) {
  for (let y = 0; y < player.shape.length; y++) {
    for (let x = 0; x < player.shape[y].length; x++) {
      if (player.shape[y][x] !== 0) {
        const xPos = x + player.pos.x + moveX;
        const yPos = y + player.pos.y + moveY;

        if (
          !stage[yPos]
          || !stage[yPos][xPos]
          || stage[yPos][xPos][1] !== 'clear'
        ) {
          return true;
        }
      }
    }
  }

  return false;
}

export const rotate = (matrix, dir) => {
  const rotateShape = matrix.map((_, index) => matrix.map((col) => col[index]));
  if (dir > 0) {
    return rotateShape.map((row) => row.reverse());
  }
  return rotateShape.reverse();
};

export const getRandomUpcomingBlock = () => rotate(randomShape().shape, Math.floor(Math.random() * 3) - 1);

export const padValue = (value, count = 2) => {
  if (typeof value === 'string') {
    return value.padStart(count, '0');
  }

  return String(value).padStart(count, '0');
};

export const getCurrentTime = () => {
  const currentTime = new Date();
  const hours = padValue(currentTime.getHours());
  const minutes = padValue(currentTime.getMinutes());
  return `${hours}:${minutes}`;
};

export const getIntervalByLevel = (level) => 800 / level + 200;

export const sweepRows = (newStage, increaseClearedRows) => newStage.reduce((acc, row) => {
  if (row.findIndex((cell) => cell[0] === 0) === -1) {
    increaseClearedRows();
    acc.unshift(new Array(newStage[0].length).fill([0, 'clear']));
    return acc;
  }
  acc.push(row);
  return acc;
}, []);

export const updatePlayerPos = (player, { x, y, collided }) => {
  const clonePlayer = JSON.parse(JSON.stringify(player));

  return {
    ...clonePlayer,
    pos: {
      x: clonePlayer.pos.x += x,
      y: clonePlayer.pos.y += y,
    },
    collided,
  };
};

export const getHiScore = (score) => {
  const lsHiScore = localStorage.getItem('Tetris:hi-score');
  let hiScore = 0;
  if (lsHiScore) {
    hiScore = Number(JSON.parse(lsHiScore));
  }

  return Math.max(score, hiScore);
};
