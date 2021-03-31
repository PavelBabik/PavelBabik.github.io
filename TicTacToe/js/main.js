let field = document.getElementById('tictoc');
const contentText = document.getElementById('modal-content');
const modalWindow = document.getElementById('result-wrapper');
const btnNewGame = document.getElementById('modal-btn');
let move = 0;
let result = '';

field.addEventListener('click', (e) => {
  if ((e.target.className = 'field')) {
    move % 2 === 0 ? (e.target.innerHTML = 'X') : (e.target.innerHTML = 'O');
    move += 1;
    checkWin();
    e.target.classList.add('animated');
  }
});

const checkWin = () => {
  let fields = document.getElementsByClassName('field');
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winArr.length; i++) {
    if (
      fields[winArr[i][0]].innerHTML == 'X' &&
      fields[winArr[i][1]].innerHTML == 'X' &&
      fields[winArr[i][2]].innerHTML == 'X'
    ) {
      result = 'Крестики';
      getWinResult(result);
    } else if (
      fields[winArr[i][0]].innerHTML == 'O' &&
      fields[winArr[i][1]].innerHTML == 'O' &&
      fields[winArr[i][2]].innerHTML == 'O'
    ) {
      result = 'Нолики';
      getWinResult(result);
    }
    if (move > 8) {
      result = 'Ничья';
      getDrawResult(result);
    }
  }
};

const getWinResult = (winner) => {
  contentText.innerHTML = `Winner ${winner}!!!`;
  modalWindow.style.display = 'flex';
};

const getDrawResult = (winner) => {
  contentText.innerHTML = `${winner}!!!`;
  modalWindow.style.display = 'flex';
};

const newGame = () => {
  modalWindow.style.display = 'none';
  location.reload();
};

btnNewGame.addEventListener('click', newGame);
