const gameboard = {}

gameboard.board = Array(0,0,0,0,0,0,0,0,0)

gameboard.turn = 1

gameboard.playerXscore = 0

gameboard.playerOscore = 0

gameboard.choose = function (index) {
  if (gameboard.turn%2 === 0 && gameboard.board[index] === 0) {
    gameboard.board[index] = 2
    gameboard.turn++
    document.getElementById('message').innerHTML = "X's turn"
  }
    else if (gameboard.turn%2 !== 0 && gameboard.board[index] === 0){
        gameboard.board[index] = 1
        gameboard.turn++
        document.getElementById('message').innerHTML = "O's turn"
    }
}

gameboard.end = false

gameboard.reset = function () {
  gameboard.board = Array(0,0,0,0,0,0,0,0,0)
  gameboard.turn = 1
  gameboard.end = false
  document.getElementById('message').innerHTML = "X's turn"
  gameboard.update()
}

gameboard.check = function () {
  if (gameboard.board[0] === gameboard.board[1] && gameboard.board[1] === gameboard.board[2] && gameboard.board[0] !== 0) {
    return gameboard.board[0]
  }
  if (gameboard.board[3] === gameboard.board[4] && gameboard.board[4] === gameboard.board[5] && gameboard.board[3] !== 0) {
    return gameboard.board[3]
  }
  if (gameboard.board[6] === gameboard.board[7] && gameboard.board[7] === gameboard.board[8] && gameboard.board[6] !== 0) {
    return gameboard.board[6]
  }
  if (gameboard.board[0] === gameboard.board[3] && gameboard.board[3] === gameboard.board[6] && gameboard.board[0] !== 0) {
    return gameboard.board[0]
  }
  if (gameboard.board[1] === gameboard.board[4] && gameboard.board[4] === gameboard.board[7] && gameboard.board[1] !== 0) {
    return gameboard.board[1]
  }
  if (gameboard.board[2] === gameboard.board[5] && gameboard.board[5] === gameboard.board[8] && gameboard.board[2] !== 0) {
    return gameboard.board[2]
  }
  if (gameboard.board[0] === gameboard.board[4] && gameboard.board[4] === gameboard.board[8] && gameboard.board[0] !== 0) {
    return gameboard.board[0]
  }
  if (gameboard.board[2] === gameboard.board[4] && gameboard.board[4] === gameboard.board[6] && gameboard.board[2] !== 0) {
    return gameboard.board[2]
  }
  if (gameboard.turn === 10) {
    return 3
  }
  return 0
}

gameboard.update = function () {
  for (let i = 0; i < 9; i++) {
    if (gameboard.board[i] === 1) {
      document.getElementById(i).innerHTML = 'X'
    }
    if (gameboard.board[i] === 2) {
      document.getElementById(i).innerHTML = 'O'
    }
    if (gameboard.board[i] === 0) {
      document.getElementById(i).innerHTML = ''
    }
  }
}


const cells = document.querySelectorAll('.cell')
cells.forEach(cell => {
  cell.addEventListener('click', (event) => {
    if (gameboard.end === true) {
      gameboard.reset()
    }
    else{
      if (gameboard.check() === 0) {
        gameboard.choose(parseInt(event.target.id))
        gameboard.update()
      }
      if (gameboard.check() === 1) {
        document.getElementById('message').innerHTML = 'Player X wins!'
        gameboard.playerXscore++
        gameboard.end = true
        document.getElementById('scoreX').innerHTML = 'X: ' + gameboard.playerXscore
      }
      if (gameboard.check() === 2) {
        document.getElementById('message').innerHTML = 'Player O wins!'
        gameboard.playerOscore++
        gameboard.end = true
        document.getElementById('scoreO').innerHTML = 'O: ' + gameboard.playerOscore
      }
      if (gameboard.check() === 3) {
        document.getElementById('message').innerHTML = 'It\'s a draw!'
        gameboard.end = true
      }
  }
  })
})

const newGame=document.getElementById('newGame')
newGame.addEventListener('click', ()=>{  
  gameboard.reset()
})