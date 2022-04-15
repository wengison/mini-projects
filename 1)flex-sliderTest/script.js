const nextCardBtn = document.querySelector('#first-line-next');
const firstCards = document.querySelectorAll('.first-line-card');
const firstLine = document.querySelector('.container-first-line');
let firstLinewidth = firstLine.clientWidth;
let cardWidth = firstLinewidth/3;
let transformX =0;
let grid = 3;
nextCardBtn.addEventListener('click',()=>{
    console.log('next card pls');
    // width += firstCards[0].clientWidth;
    // grid+=1;
    // gridPlus(grid);
    // deleteCard();
    moveCard();
    widthPlus();
    createCard();
});

function indexCard() {
    id=0;
    firstCards.map(x=>{
        id+=1;

    })
}
//1)---- nejdrive posunout
//2)----pote rozsirit
//3)----nakonec pridat card

//1)---- 
function moveCard() {
    let moveWidth = firstLinewidth+=cardWidth;
    firstLine.style.width = `${moveWidth}px`;
    transformX+=(cardWidth);
    firstLine.style.transform = `translateX(${-transformX}px)`;
    // firstLine.style.justifyContent = 'flex-end';
    console.log(moveWidth);
    // console.log(cardWidth);
}

//2)----pote rozsirit
function widthPlus() {
    firstLinewidth+=cardWidth;
}

let x = 1;
function createCard() {
    // let x = Math.floor(Math.random()*3);
    console.log(x);
    setTimeout(()=>{
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
    },500)
    
}

function deleteCard() {
    let these = document.querySelectorAll('.first-line-card');
    these[0].remove();
}
// function gridPlus(x) {
//     firstLine.style.gridTemplateColumns = `repeat(${x},1fr)`;
// }
// <li class="first-line-card">