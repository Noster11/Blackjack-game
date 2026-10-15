
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let dealerEl = document.getElementById("dealer-el")
let dealerSumEl = document.getElementById("dealerSum-el")


function startGame() {
    renderGame()

}


function createShuffledDeck() {
    let deck = []

    for (let value = 2; value <= 9; value++) {
        for (let card = 0; card < 4; card++) {
            deck.push(value)
        }
    }

    for (let card = 0; card < 16; card++) {
        deck.push(10)
    }

    for (let card = 0; card < 4; card++) {
        deck.push(11)
    }

    for (let i = deck.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let card = deck[i]
        deck[i] = deck[randomIndex]
        deck[randomIndex] = card
    }

    return deck
}

function getRandomCard() {
    return deck.pop()
}

let deck = createShuffledDeck()
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let dealerFirst = getRandomCard()

let dealerCards = [dealerFirst]
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let dealerSum = dealerFirst

function hits() {
    if (isAlive = true) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        shameless()
    }
}



function shameless() {
    renderGame()
}


function renderGame() {


    cardsEl.textContent = "Cards: "
    for (let x = 0; x < cards.length; x++) {
        cardsEl.textContent += cards[x] + " "
    }

    dealerEl.textContent = "Cards: "
    for (let i = 0; i < dealerCards.length; i++) {
        dealerEl.textContent += dealerCards[i] + " "
    }

    dealerSumEl.textContent = "Sum: " + dealerSum
    sumEl.textContent = "Sum: " + sum




    if (sum < 21) {
        isAlive = true
        messageEl.textContent = "Draw another card?"
    } else if (sum === 21) {
        hasBlackJack = true
        messageEl.textContent = "You win!"
    } else if (sum > 21) {
        isAlive = false
        messageEl.textContent = "You lose :("
    }




}


function stands() {
    let card = getRandomCard()
    dealerCards.push(card)
    dealerSum += card

    dealerEl.textContent = "Cards: "
    for (let y = 0; y < dealerCards.length; y++) {
        dealerEl.textContent += dealerCards[y] + " "
    }

    if (dealerSum < 17) {
        messageEl.textContent = "Dealer draws again"
    } else if (dealerSum > 21) {
        messageEl.textContent = "Dealer busts you win!"
    } else if (dealerSum >= sum) {
        messageEl.textContent = "you lose :("
    } else {
        messageEl.textContent = "you win!"
    }
    dealerSumEl.textContent = "Sum: " + dealerSum


}




function reset() {
    deck = createShuffledDeck()
    cards = [getRandomCard(), getRandomCard()]
    sum = cards[0] + cards[1]
    dealerCards = [getRandomCard()]
    dealerSum = dealerCards[0]
    hasBlackJack = false
    isAlive = true


    cardsEl.textContent = "Cards: "
    sumEl.textContent = "Sum: "
    dealerEl.textContent = "Cards:"
    dealerSumEl.textContent = "Sum:"
    messageEl.textContent = " Want to play a hand?"
}
