// Questão 4
let button = document.querySelector('#bt3');
button.addEventListener('click', () =>{
    let valorA = document.querySelector('#valorA').value;
    let valorB = document.querySelector('#valorB').value;
    let valorC = document.querySelector('#valorC').value;
    let valoresArray = [valorA, valorB, valorC];
    valoresArray.reverse();
    let result = document.querySelector('.resultP');
    result.innerHTML = valoresArray;
});
// Fim da Questão 4

// Questão 7
let bot = document.querySelector("#enviar");
    let divRes = document.querySelector("#resultado");
    bot.addEventListener('click', function(){
        let n = document.querySelector('#num').value;
        if(n < 0 || n%1!=0){
            divRes.innerHTML = "O número deve ser inteiro e positivo. Tente novamente.";
        }
        else{
            let a=1;
            let b=0;
            let c=0;
            let seq = [];
            while (c<=n){
                c=a+b;
                a=b;
                b=c;
                if(c<=n){
                    seq.push(c);
                }
            }
            console.log(seq);
            let res = 0;
            for (let i = seq.length; i>0; i--){
                res += seq[i-1];
            }
        divRes.innerHTML = "A soma dos números da sequência até o caractere informado é igual a: "+res;
        }
    });
//Fim da Questão 7

// Questão 9
const tiles = Array.from(document.querySelectorAll('.tile'));
const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';
const TIE = 'TIE';
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ];
 const isValidAction = (tile) => {
    if (tile.innerText === 'X' || tile.innerText === 'O'){
        return false;
    }

    return true;
};
const updateBoard =  (index) => {
    board[index] = currentPlayer;
 }
 const changePlayer = () => {
    playerDisplay.classList.remove(`player${currentPlayer}`);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
}
const announce = (type) => {
    switch(type){
       case PLAYERO_WON:
            announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
            break;
       case PLAYERX_WON:
            announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
            break;
       case TIE:
            announcer.innerText = 'Tie';
        }
    announcer.classList.remove('hide');
};
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
  
    if (roundWon) {
      announce(currentPlayer === "X" ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      return;
    }
  
    if (!board.includes("")) announce(TIE);
  }
  const userAction = (tile, index) => {
    if (isValidAction(tile) && isGameActive) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  }
  tiles.forEach( (tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
});
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    tiles.forEach(tile => {
        tile.innerText = '';
        tile.classList.remove('playerX');
        tile.classList.remove('playerO');
    });
}
resetButton.addEventListener('click', resetBoard);

// Fim da Questão 9

