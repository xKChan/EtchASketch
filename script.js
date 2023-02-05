const container = document.getElementById('container');

function createGrid() {
  for (let i = 0; i < 16; i++) {  
    const rowGrid = document.createElement('div');
    rowGrid.classList.add('row');
    container.appendChild(rowGrid);
    for (let i = 0; i < 16; i++) {
      const column = document.createElement('div');
      column.setAttribute('id', 'column');
      rowGrid.appendChild(column);
    }
  }
}


createGrid();
// createColumns();
console.log('hello');
