const clearBtn = document.querySelector('#clear');
const createBtn = document.querySelector('#create');
const gridContainer = document.querySelector('.container');


createBtn.addEventListener('click', buildGrid)

function buildGrid (){
    let size = prompt('grid size? ')
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const grid = document.createElement("div");
            const gridWidth = 700 / size;
            grid.style.width = `${gridWidth}px`;
            const gridHeight = 700 / size;
            grid.style.height = `${gridHeight}px`;
            grid.classList.add('grid')
            grid.addEventListener('mouseover', () => {
                grid.style.backgroundColor = "gray"
            })

            gridContainer.appendChild(grid);
        }
    }
}

clearBtn.addEventListener('click', clearGrid)

function clearGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild)
    }
}