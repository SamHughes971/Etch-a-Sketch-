const divContainer = document.querySelector('#container');
const button = document.createElement('button');
document.body.appendChild(button);

function createSquareElements(rows, cols){
    for (let i=0; i < (rows * cols); i++){
        const divSquares = document.createElement('div')
        divSquares.innerText = `${i + 1}`
        divSquares.className = "square-element";
        divContainer.append(divSquares);
    }
}

divContainer.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.className === 'square-element'){
        e.target.style.backgroundColor  = "red";
    }
});

button.addEventListener('click', () => {
    
    const rows = parseInt(prompt('How many rows?'));
    const cols = parseInt(prompt('How many columns?'));
    createSquareElements(rows, cols);

    
})

