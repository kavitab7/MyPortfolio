let currMoleTile;
let currBombTile;
let score = 0;
let gameOver = false;

window.onload = function () {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) {
        let tile = document.createElement('div')
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById('board').appendChild(tile);
    }
    setInterval(setMole, 1000)
    setInterval(setBomb, 2000)

}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num;
}

function setMole() {
    if (gameOver) {
        return
    }
    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement('img')
    mole.src = "mole.png";
    let num = getRandomTile();
    if (currBombTile && currBombTile.id == num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}
function setBomb() {
    if (gameOver) {
        return
    }
    if (currBombTile) {
        currBombTile.innerHTML = "";
    }

    let bomb = document.createElement('img')
    bomb.src = "bomb.png";
    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id == num) {
        return;
    }
    currBombTile = document.getElementById(num);
    currBombTile.appendChild(bomb);
}

function selectTile() {
    if (gameOver) {
        return;
    }
    if (this == currMoleTile) {
        score = score + 2;
        document.getElementById('score').innerHTML = "SCORE: " + score.toString();
    }
    if (this == currBombTile) {
        document.getElementById('score').innerHTML = "GAME OVER😢 SCORE: " + score.toString() + " !Please Reload to Start";
        gameOver = true;
    }
}