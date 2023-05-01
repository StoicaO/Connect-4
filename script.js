const circleRed = "🔴"
const circcleYellow = "🙂"
let turnPlayer = circleRed;
let boxes = Array.from(document.getElementsByClassName("box"));
let array = Array(42).fill(null);

for (let box of boxes) {
    box.addEventListener('click', boxClicked);
    
}

function boxClicked(e){
    const id = e.target.id;
    if(!array[id]){
        array[id] = turnPlayer;
        e.target.innerText = turnPlayer;
        if(playerWon()){
            messageWinner.innerHTML = `${turnPlayer} has won!🎉`;
        }
    }
    turnPlayer = turnPlayer === circleRed ? circcleYellow : circleRed;
}


function playerWon() {
    for(let i = 42; i >= 0; --i){
        if(array[i] === turnPlayer){
            if(array[i + 1] === turnPlayer && array[i + 2] === turnPlayer && array[i + 3] === turnPlayer) {
                document.getElementById(i).style.backgroundColor = "red";
                document.getElementById(i + 1).style.backgroundColor = "red";
                document.getElementById(i + 2).style.backgroundColor = "red";
                document.getElementById(i + 3).style.backgroundColor = "red";
                disableTable();
                return true;

            }else if(array[i - 7] === turnPlayer && array[i - 14] === turnPlayer && array[i - 21] === turnPlayer) {
                document.getElementById(i).style.backgroundColor = "red";
                document.getElementById(i -7).style.backgroundColor = "red";
                document.getElementById(i - 14).style.backgroundColor = "red";
                document.getElementById(i - 21).style.backgroundColor = "red";
                disableTable();
                return true;
            }else if(array[i - 6] === turnPlayer && array[i - 12] === turnPlayer && array[i - 18] === turnPlayer) {
                document.getElementById(i).style.backgroundColor = "red";
                document.getElementById(i - 6).style.backgroundColor = "red";
                document.getElementById(i - 12).style.backgroundColor = "red";
                document.getElementById(i - 18).style.backgroundColor = "red";
                disableTable();
                return true;
            }else if(array[i - 8] === turnPlayer && array[i - 16] === turnPlayer && array[i - 24] === turnPlayer) {
                document.getElementById(i).style.backgroundColor = "red";
                document.getElementById(i - 8).style.backgroundColor = "red";
                document.getElementById(i - 16).style.backgroundColor = "red";
                document.getElementById(i - 24  ).style.backgroundColor = "red";
                disableTable();
                return true;
            }
            

        }
    }

}


function disableTable() {
    for (let box of boxes) {
        box.removeEventListener('click', boxClicked);  
    }
}

function resetGame() {
    location.reload();
}
