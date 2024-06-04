const divContainer = document.querySelector('#container');

const rows = 16;
const cols = 16;

function createSquareElements(rows, cols){
    for (let i=0; i < (rows * cols); i++){
        const divSquares = document.createElement('div')
        divSquares.innerText = `${i + 1}`
        divSquares.className = "square-element";
        divContainer.append(divSquares);
    }
}

createSquareElements(rows, cols);