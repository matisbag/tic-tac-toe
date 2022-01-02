import {
  initialBoard,
  play,
  Board,
  getNextPlayer,
  getWinner,
} from './tictactoe';

let tbody = document.querySelector('tbody') as HTMLTableSectionElement;
const gameInfo = document.querySelector('.game_info') as HTMLSpanElement;
const btn = document.querySelector('button') as HTMLButtonElement;

function game(board: Board) {
  tbody.innerHTML = '';

  board.forEach((row, y) => {
    const tr = document.createElement('tr');
    row.forEach((cel, x) => {
      const td = document.createElement('td');
      if (board[y][x] === 1) {
        const img = document.createElement('img');
        img.src = require('/assets/cross.png');
        td.appendChild(img);
      } else if (board[y][x] === 2) {
        const img = document.createElement('img');
        img.src = require('/assets/round.png');
        td.appendChild(img);
      }
      tr.append(td);
      tbody.append(tr);

      if (getWinner(board)) {
        gameInfo.innerHTML = `${
          getWinner(board) === 1
            ? '<span class="red">Red</span>'
            : '<span class="blue">Blue</span>'
        } player victory!`;
        return;
      }
      if (getNextPlayer(board)) {
        gameInfo.innerHTML = `It's up to the ${
          getNextPlayer(board) === 1
            ? '<span class="red">Red</span>'
            : '<span class="blue">Blue</span>'
        } player to play`;
      } else {
        gameInfo.innerHTML = 'No winner !';
        return;
      }

      td.addEventListener('click', function () {
        btn.style.visibility = 'visible';
        game(play(board, x, y));
      });
    });
  });
}

game(initialBoard);

btn.addEventListener('click', function () {
  btn.style.visibility = 'hidden';
  game(initialBoard);
});
