const divContainer = document.querySelector('#container');

const x = 16;
const y =16;

function createSquareElements(x, y){
    for (let i=0; i < (x * y); i++){
        const divSquares = document.createElement('div')
        divSquares.className = "square-element";
        divContainer.append(divSquares);
    }
}

createSquareElements(x, y);