let cardsArray = [
    {
        'name': 'sad',
        'img': 'sad.png',
    },
    {
        'name': 'happy',
        'img': 'happy.png',
    },
    {
        'name': 'angry',
        'img': 'angry.png',
    },
    {
        'name': 'bad',
        'img': 'bad.png',
    },
    {
        'name': 'cool',
        'img': 'cool.png',
    },
    {
        'name': 'mad',
        'img': 'mad.png',
    }
];

const parentDiv = document.querySelector("#card-section");

const gameCard = cardsArray.concat(cardsArray);

const myNumbers = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
let shuffledChild = myNumbers(gameCard);

let clickCount = 0;
let firstCard = "";
let secondCard = "";

const card_matches = () => {
    let card_selected = document.querySelectorAll('.card_selected')
    card_selected.forEach((ele) => {
        ele.classList.add('card_match');
    })
}

const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((ele) => {
        ele.classList.remove('card_selected');
    })


}
parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if (curCard.id === "card-section") { return false }

    clickCount++;

    if (clickCount < 3) {

        if (clickCount === 1) {
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        } else {
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }

        if (firstCard !== "" && secondCard !== "") {
            if (firstCard === secondCard) {
                setTimeout(() => {
                    card_matches()
                    resetGame()
                }, 1000)

            } else {
                setTimeout(() => {
                    resetGame()
                }, 1000)
            }
        }

    }

})

for (let i = 0; i < shuffledChild.length; i++) {
    const childDiv = document.createElement('div')
    childDiv.classList.add('card')
    childDiv.dataset.name = shuffledChild[i].name;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card')

    const back_div = document.createElement('div');
    back_div.classList.add('back-card')

    back_div.style.backgroundImage = `url(${shuffledChild[i].img})`;

    parentDiv.appendChild(childDiv)

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
}