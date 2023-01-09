const CONTAINER = document.querySelector('.container');
let card;
let count = 0;
const MEMORY_ITEM = [
    {
        name: 'mangue',
        id: 1
    },

    {
        name: 'mangue',
        id: 1
    },

    {
        name: 'banane',
        id: 2
    },

    {
        name: 'banane',
        id: 2
    },

    {
        name: 'melon',
        id: 3
    },

    {
        name: 'melon',
        id: 3
    },

    {
        name: 'pasteque',
        id: 4
    },

    {
        name: 'pasteque',
        id: 4
    },

    {
        name: 'litchi',
        id: 5
    },

    {
        name: 'litchi',
        id: 5
    },

    {
        name: 'tomate',
        id: 6
    },

    {
        name: 'tomate',
        id: 6
    },

]

let arr = [];

function check(arr) {
    let j;
    let tmp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}

const ON_CHECK = check(MEMORY_ITEM);

for (let i = 0; i < ON_CHECK.length; i++) {
    card = document.createElement("div");
    card.className = 'card';
    card.textContent = ON_CHECK[i].name;
    CONTAINER.appendChild(card);
}

const CARD_ALL = document.querySelectorAll('.card');

for (let e = 0; e < ON_CHECK.length; e++) {
    for (let i = 0; i < CARD_ALL.length; i++) {
        function getId() {
            CARD_ALL[i].classList = 'card_active';
            if (CARD_ALL[i].textContent === ON_CHECK[e].name) {
                arr.push(ON_CHECK[e].id);
                if (arr[0] === arr[3]) {
                    arr = [];
                    for (let f = 0; f < CARD_ALL.length; f++) {
                        if (CARD_ALL[i].textContent === CARD_ALL[f].textContent) {
                            CARD_ALL[f].style.opacity = "0"
                        }
                    }
                } if (arr[3] !== undefined) {
                    if (arr[0] !== arr[3]) {
                        arr = [];
                        setTimeout(() => {
                            for (let r = 0; CARD_ALL.length; r++) {
                                CARD_ALL[r].classList = 'card';
                            }
                        }, 300)
                    }
                }
            }
        }
        CARD_ALL[i].addEventListener('click', getId);
    }
}


