const boxRed = "Red";
const boxYellow = "Yellow";
let currPlayer = boxRed;

const rows = 6;
const colum = 7;
let blockCell = false;
let board ;


function createGrid() {
    let start = document.getElementById("Start");
    start.style.display = "none";
    board = [];
   
    for(let i = 0; i < rows; ++i) {
        let row = [];
        for(let j = 0; j < colum; ++j){
            row.push(" ");
            let grid = document.createElement("div");
            grid.id = i.toString() + "-" + j.toString();
            grid.classList.add('grid');
            grid.addEventListener("click", coloringCell);
            document.getElementById("board").append(grid);
        }
        board.push(row);
        
    }
    
}

function coloringCell(){

    if (blockCell) {
        return;
    }
    let coord = this.id.split("-"); //"0 - 0" --> ["0", "0"]
    console.log(coord);
    let r = Number(coord[0]);
    let c = Number(coord[1]);


    board[r][c] = currPlayer;
    let cell = document.getElementById(r.toString() + "-" + c.toString());
    if (currPlayer == boxRed){
        cell.classList.add("redPice");
        currPlayer = boxYellow;
    } else {
        cell.classList.add("yellowPice");
        currPlayer = boxRed;
    }
    

    if (horizontally() ){
        setWinner(r, c);
    } else if (Vertically ()) {
        setWinner(r, c);
    } else if (secoDiagonal()) { 
        setWinner(r, c);
    } else if (mainDiagonal()) {
        setWinner(r, c);
    }
}

function horizontally() {
    for(let r = 0; r < rows; ++r) {
        for(let c = 0; c < colum - 3; ++c) {
            if (board[r][c]  != " ") {
                if (board[r][c] == board[r][c + 1] && 
                    board[r][c + 1] == board[r][c + 2] && 
                    board[r][c + 2] == board[r][c + 3]) {
                    return true;
                } 
            }
        }
    }
}

function Vertically () {
    for(let c = 0; c < colum; ++c){
        for(let r = 0; r < rows - 3; ++r) {
            if (board[r][c] != " ") {
                if (board[r][c] == board[r + 1][c] && 
                    board[r + 1][c] == board[r + 2][c] && 
                    board[r + 2][c] == board[r + 3][c]) {
                    return true;
                }
            }  
        }
    }
}

function secoDiagonal()  {
    for(let r = 3; r < rows ; ++r ){
        for(let c = 0; c < colum - 3; ++c) {
            if (board[r][c] != " "){
                if (board[r][c] == board[r - 1][c + 1] &&
                    board[r - 1][c + 1] == board[r - 2][c + 2] &&
                    board[r - 2][c + 2] == board[r - 3][c + 3]) {
                    return true;
                }
            }
        }
    }
}
function mainDiagonal () {
    for (let r = 0; r < rows - 3; ++r) {
        for (let c = 0; c < colum - 3; ++c) {
            if (board[r][c] != " ") {
                 if (board[r][c] == board[r + 1][c + 1] &&
                    board[r + 1][c + 1] == board[r + 2][c + 2] &&
                    board[r + 2][c + 2] == board[r + 3][c + 3]) {
                    return true;
                }
            }
        }
    }

}

function setWinner(r, c) {
    let winner = document.getElementById("messageWinner");
    if (board[r][c] == boxRed) {
        winner.innerText = `${boxRed} has won!🎉`;
    } else {
        winner.innerText = `${boxYellow} has won!🎉`;
    }
    blockCell = true;
}
   
function resetGame() {
    location.reload();
}