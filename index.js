const container = document.querySelector(".container");
const addBtn = document.querySelector('.add');
const textBox = document.getElementById('textBox');
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

makeRows(size);

addBtn.addEventListener('click', function changeRows() {
    let newSize = parseInt(textBox.value);
    if (2 >= newSize <= 100 ) {
        container.innerHTML = ''; 
        makeRows(newSize);
    } else {
        console.log('error')
    }
})