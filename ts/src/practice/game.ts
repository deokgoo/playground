type Move = 'up' | 'down' | 'left' | 'right';
type Pos = {
  x: number,
  y: number,
};

const moveExec: Readonly<{[key in Move]: number}> = {
  'up': 0,
  'down': 1,
  'left': 2,
  'right': 3,
}

const move = function (cmd: Move, pos: Pos): void{
  const nextX = [0, 0, -1, 1];
  const nextY = [1, -1, 0, 0];

  pos.x += nextX[moveExec[cmd]];
  pos.y += nextY[moveExec[cmd]];
}

const execCommand: Move[] = ['up', 'down', 'left', 'right'];
const pos: Pos = {x: 100, y: 100};

execCommand.forEach((x: Move) => {
  move(x, pos);
  console.log(pos);
});
