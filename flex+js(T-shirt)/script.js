const nextCardBtn = document.querySelector('#first-line-next');
const firstCards = document.querySelectorAll('.first-line-card');
const firstLine = document.querySelector('.container-first-line');
let width = firstCards[0].clientWidth;
let grid = 3;
nextCardBtn.addEventListener('click',()=>{
    console.log('next card pls');
    width += firstCards[0].clientWidth;
    // grid+=1;
    // gridPlus(grid);
    deleteCard();
    createCard();
    moveCard();
});

function indexCard() {
    id=0;
    firstCards.map(x=>{
        id+=1;

    })
}

function moveCard() {
    // firstCards.forEach(card=>card.style.transform = `translateX(${-width}px)`);
}
function gridPlus(x) {
    firstLine.style.gridTemplateColumns = `repeat(${x},1fr)`;
}
let x = 1;
function createCard() {
    // let x = Math.floor(Math.random()*3);
    console.log(x);
    let li = document.createElement('li');
    firstLine.appendChild(li);
    li.classList.add('first-line-card');
    li.innerHTML = `
    <div class="card-pic card-pic-${x}">
        <div class="card-plus">+</div>
    </div>
    <ul class="card-info">
        <li class="left info-labels">
            <p>Men's shirts</p>
            <h3>OUT CAST</h3>
        </li>
        <li class="right info-price">
            <p>$23.99</p>
        </li>
    </ul>`
    x==3?x=1:x+=1;
}
function deleteCard() {
    let these = document.querySelectorAll('.first-line-card');
    these[0].remove();
}

// <li class="first-line-card">