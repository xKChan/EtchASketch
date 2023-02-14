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

  const sketch = document.querySelectorAll('.column');
  sketch.forEach(function(input){
    input.addEventListener('mouseover', function hover() {
      let x = Math.floor(Math.random() * 256);
      let y = Math.floor(Math.random() * 256);
      let z = Math.floor(Math.random() * 256);
      input.style.backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
    })
  })
}

createGrid();

function newSketchPad(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  createGrid();
}

document.getElementById("reset").onclick = function() {
  newSketchPad(container)
};
