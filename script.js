const divContainer = document.querySelector('#container');
const buttonReset = document.createElement('button');
const buttonColour = document.createElement('button')
const buttonContainer= document.createElement('div');

buttonContainer.setAttribute('id', 'buttonContainerID');
buttonColour.setAttribute('class', 'buttonColour');
buttonReset.setAttribute('class', 'buttonReset');

buttonContainer.appendChild(buttonReset);
buttonContainer.appendChild(buttonColour);


buttonReset.innerText = 'Start'
buttonColour.innerText = 'Random Colour'
document.body.append(buttonContainer);
document.body.append(buttonContainer);

function createSquareElements(rows, cols){
    for (let i=0; i < (rows * cols); i++){
        const divSquares = document.createElement('div')
        divSquares.className = "square-element";
        divContainer.append(divSquares);
    }
}

function randomColourGenerator(){
    return 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
}


buttonContainer.addEventListener('click', (e) => {
    buttonReset.innerText = 'Reset'
    const target = e.target;

    const elements = document.getElementsByClassName("square-element");

    if(target.className === 'buttonColour'){
        for(let i = 0; i < elements.length; i++){
            elements[i].classList.toggle('square-element-random')
            
        }  
    }

    if(target.className === 'buttonReset'){
        const rows = parseInt(prompt('How many rows?'));
        const cols = parseInt(prompt('How many columns?'));
        if(divContainer.firstChild){
            while(elements.length > 0) elements[0].remove();
            
            createSquareElements(rows, cols); 
        }else createSquareElements(rows, cols); 
    }
})



divContainer.addEventListener("mouseover", (e) => {
    const target = e.target;

    if (target.className == 'square-element'){
        target.style.backgroundColor  = "red";
        buttonColour.innerText = 'Random Colour'
    }
    if (target.className == "square-element square-element-random" ){
        target.style.backgroundColor  = randomColourGenerator();
        buttonColour.innerText = 'Default Colour'
    }
    
});




