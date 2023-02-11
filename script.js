const container = document.getElementById('container');


function createGrid() {
  for (let i = 0; i < 16; i++) {  
    const rowGrid = document.createElement('div');
    rowGrid.classList.add('row');
    container.appendChild(rowGrid);
    for (let i = 0; i < 16; i++) {
      const columnGrid = document.createElement('div');
      columnGrid.classList.add('column');
      rowGrid.appendChild(columnGrid);
    }
  }
}

createGrid();


const sketch = document.querySelectorAll('.column');
sketch.forEach(function(input){
  input.addEventListener('mouseover', function hover() {
    input.style.backgroundColor = 'lightblue';
  })
})
