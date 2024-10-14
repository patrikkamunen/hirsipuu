const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "programming",
    "javascript",
    "database",
    "markup",
    "framework",
    "variable",
    "stylesheet",
    "library",
    "asynchronus",
    "hypertext"
]

let randomizedWord = ''
let maskedWord = ''
let guesses = 0


const newGame = () => {
    const random = Math.floor(Math.random() * words.length)
    randomizedWord = words[random];
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    guesses = 0
    span.innerHTML = guesses
};

const replaceFoundChars = (guess) => {
    let newMaskedWord = maskedWord.split('')
    for (let i = 0; i < randomizedWord.length; i++) {
        if (randomizedWord[i] === guess) {
            newMaskedWord[i] = guess
        }
    }
    maskedWord = newMaskedWord.join('')
    output.innerHTML = maskedWord
};

const win = () => {
    alert(`You have guessed right, the word is ${randomizedWord}.`)
    newGame()
};

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        const guess = input.value.toLowerCase()
        input.value = ''
        guesses++
        span.innerHTML = guesses

        if (guess === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1) {
            replaceFoundChars(guess)
            if (maskedWord.toLowerCase() === randomizedWord.toLowerCase()) {
                win()
            }
        } else {
            alert("You guessed wrong!")
        }
    }
});

newGame();