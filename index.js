const container = document.querySelector(".container");
const addBtn = document.querySelector('.add');
const textBox = document.getElementById('textBox');
const resetBtn = document.querySelector('.reset');
let size = 32;

const makeRows = (size) => {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    
    for (c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell).className = "grid-item";
    }
}
addBtn.addEventListener('click', function changeRows() {
    size = parseInt(textBox.value);
    if (1 < size && size <= 100) {
        container.innerHTML = '';        
        makeRows(size);
    } else {
        console.log('error');
    }
})

makeRows(size);


