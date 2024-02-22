let words = ['APPLE', 'AARDVARK', 'ANT', 'ANTELOPE', 'ALLIGATOR', 'BANANA', 'BEAR', 'BIRD', 'BISON', 'BUTTERFLY', 'CAR', 'CAT', 'CAMEL', 'CROCODILE', 'COW', 'DOG', 'DOLPHIN', 'DUCK', 'DEER', 'DRAGONFLY','ELEPHANT', 'EAGLE', 'ELK', 'EMU', 'EARTHWORM','FISH', 'FROG', 'FOX', 'FLAMINGO', 'FALCON',
'GIRAFFE', 'GOAT', 'GORILLA', 'GRASSHOPPER', 'GAZELLE','HORSE', 'HIPPO', 'HAWK', 'HEDGEHOG', 'HUMMINGBIRD','ICE', 'IGUANA', 'IMPALA', 'IBIS', 'INDRI','JAGUAR', 'JELLYFISH', 'JAY', 'JACKAL', 'JERBOA','KANGAROO', 'KOALA', 'KINGFISHER', 'KOOKABURRA', 'KIWI',
'LION', 'LEOPARD', 'LLAMA', 'LADYBUG', 'LYNX','MANGO', 'MONKEY', 'MOUSE', 'MOOSE', 'MAGPIE','NIGHT', 'NEWT', 'NIGHTINGALE', 'NUMBAT', 'NARWHAL','ORANGE', 'OSTRICH', 'OTTER', 'OWL', 'OCTOPUS','PENGUIN', 'PARROT', 'PANDA', 'PELICAN', 'PANTHER',
'QUEEN', 'QUOKKA', 'QUAIL', 'QUETZAL', 'QUOKKA','RABBIT', 'RACCOON', 'RHINOCEROS', 'RAT', 'ROBIN','SUN', 'SNAKE', 'SHARK', 'SHEEP', 'SPARROW','TIGER', 'TURTLE', 'TURKEY', 'TOUCAN', 'TARSIER','UMBRELLA', 'UAKARI', 'URIAL', 'UNICORN', 'UGUISU','VULTURE', 'VIPER', 'VOLE', 'VAQUITA',
'WHALE', 'WOLF', 'WOMBAT', 'WOODPECKER', 'WALRUS','XERUS', 'XENOPS', 'XENOPUS', 'XANTUS', 'XOLOITZCUINTLI','YAK', 'YABBY', 'YAKOW', 'YELLOWHAMMER', 'YELLOWJACKET','ZEBRA', 'ZEBU', 'ZONKEY', 'ZORSE', 'ZORRO'];
let llifes = 7;
let letterCount = 0;

function choseAWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

let theWord = choseAWord();
let wordDisplayElement = document.getElementById("wordDisplay");

function displayUnderscore(){
    let displayElement = document.getElementById("display");
    displayElement.innerHTML = "";

    for (let i = 0; i < theWord.length; ++i) {
        let underscoreSpan = document.createElement("span");
        underscoreSpan.textContent = "_ ";
        displayElement.appendChild(underscoreSpan);
    }
}
displayUnderscore();

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonValue = this.innerText;
        let updatedWordDisplay = '';
        let guessed = false;

        for (let i = 0; i < theWord.length; ++i) {
            if (buttonValue === theWord[i]) {
                document.getElementById("display").children[i].textContent = theWord[i];
                guessed = true;
                ++letterCount;
            }
        }
        if (guessed == false && llifes >= 0) {
            --llifes;
            document.getElementById("lifes").textContent = "Lifes " + llifes;
        } 
        if (llifes > -1 && letterCount == theWord.length) {
            document.getElementById("result").textContent = "Winner";
        } if (llifes == -1 && letterCount != theWord.length) {
            document.getElementById("result").textContent = "Try again!";
            wordDisplayElement.textContent = "The word was: " + " " + theWord;
        }
    });
