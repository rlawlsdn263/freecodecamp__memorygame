//Create an array for the cards
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
];

//Mix cards in random order
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

//tells us if the cards are a match
function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const firstCard = cardsChosenIds[0];
    const secondCard = cardsChosenIds[1];
    if(firstCard == secondCard) {
        cards[firstCard].setAttribute('src', 'images/blank.png');
        cards[secondCard].setAttribute('src', 'images/blank.png');
        alert("You clicked the same image!");
    }

    //카드가 맞으면 흰 배경으로 바뀌고 클릭 이벤트 종료         
    if(cardsChosen[0] == cardsChosen[1]) {    
        alert('You found a match!');
        cards[firstCard].setAttribute('src', 'images/white.png');
        cards[secondCard].setAttribute('src', 'images/white.png');
        cards[firstCard].removeEventListener('click', flipCard);
        cards[secondCard].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen); //짝이 맞은 카드 목록 회수
    } else { //카드가 틀릴 경우
        cards[firstCard].setAttribute('src', 'images/blank.png');
        cards[secondCard].setAttribute('src', 'images/blank.png');
        alert('Sorry! Try Again!')
    }

    //짝 맞은 카드 처리 후 다시 시작
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length === (cardArray.length/2)) {
        resultDisplay.textContent = "Congratulations! You've found them all!"
    }
}


//Flips card
function flipCard() {
    const cardNumber = this.getAttribute('data-number');
    cardsChosen.push(cardArray[cardNumber].name); //클릭된 카드 이름 배열에 추가
    cardsChosenIds.push(cardNumber);
    this.setAttribute('src', cardArray[cardNumber].img); //클릭된 카드 img 태그에 주소 부여
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
} 

//Creates mixed cardboard
function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {        //for문을 통해 cardArray 배열의 크기만큼 생성을 한다
        const card = document.createElement('img');    //card이름을 가진 img 요소를 만든다
        card.setAttribute('src', 'images/blank.png');  //card한테 src="images/blank.png" 값을 준다
        card.setAttribute('data-number', i)            //card한테 고유값을 주기 위해 'data-id=i' 값을 준다
        card.addEventListener('click', flipCard);      //card를 클릭하면 flipCard 함수가 동작한다.
        gridDisplay.appendChild(card);                 //비어있던 girdDisplay 공간에 12장의 카드(배열의 크기)가 생성된다. 
    }
}

createBoard();