const divContainer = document.querySelector('#container');
const button = document.createElement('button');
const buttonContainer= document.createElement('div');

buttonContainer.setAttribute('id', 'buttonContainerID');
buttonContainer.appendChild(button);
button.innerText = 'Start'
document.body.append(buttonContainer);

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
    button.innerText = 'Reset'
    const elements = document.getElementsByClassName("square-element");
    
    const rows = parseInt(prompt('How many rows?'));
    const cols = parseInt(prompt('How many columns?'));
    
    if(divContainer.firstChild){
        while(elements.length > 0) elements[0].remove();
        
        createSquareElements(rows, cols); 
    }else createSquareElements(rows, cols);

    
    
})

