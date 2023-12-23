const btn = document.querySelector(".btn")
const guess = document.querySelector("input")
const msg = document.querySelector(".msg")
let play = false;
let newWords = "";
let ranWords = "";
let sWords = ['apple', 'orange', 'grape', 'strawberry', 'lemon', 'pineapple', 'watermelon', 'puzzle',
    'artist', 'lotus', 'spoon', 'friends', 'airtel', 'angry', 'anyone', 'happy', 'animal', 'annual', 'tiger', 'bathroom', 'beach', 'earth'
    , 'criminal', 'drawing', 'blood', 'dangerous', 'doctor']

const createWords = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTemp = sWords[ranNum];
    return newTemp;
}
const scrambleWords = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[j];
        arr[j] = temp;
        return arr;
    }
}
btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createWords();
        ranWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = `Guess The Word : ${ranWords}`;
    } else {
        let tempWord = guess.value;
        if (newWords == tempWord) {
            play = false;
            btn.innerHTML = "Start again"
            msg.innerHTML = `🤩 Awesome!! It's correct Word is ${newWords}`
            guess.classList.toggle('hidden');
            guess.value = "";
        } else {
            msg.innerHTML = `😢Oops Try Again! Word is ${ranWords} `
        }
    }
})