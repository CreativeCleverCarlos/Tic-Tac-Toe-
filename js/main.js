
const cellElements = document.querySelectorAll()



let gameboard = [];

//winning condition

//

/**
 
//Changing the approach, not the goal

const winningCondition = (function(winner){
    // let gameboard = [0,1,2,3,4,5,6,7,8]; 
    
    //these are all the possibilities of a winnig board in Tic Tac Toe. If none of these arrays are present, then by default the game is a draw
    let winningBoard = [[0,1,2], [3,4,5], [6,7,8] //rows
                        [0,3,6], [1,4,7], [2,5,8]//columns
                        [0,4,8], [6,4,2]]//diagonal
    for (let i = 0; i < winningBoard.length; i++){
        const [a, b, c] = winningBoard;
        console.log(winner[0])
        if (winner[0] == winningBoard[0] && winner[1] == winningBoard[1] && winner[2] == winningBoard[1]){
            return "it finally worked"
        } else {
            return "still nothing"
        }
    }
    

})

//check for a winner

console.log(winningCondition([0,1,2]))

**/