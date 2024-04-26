const drawingBoard = document.getElementById("drawingBoard");
var column = 16;
var row = 16;
var color = "black";

var mouseDown = false;
document.body.onmousedown = () => {
  mouseDown = true;
};
document.body.onmouseup = () => {
  mouseDown = false;
};

drawBoard();
const sizeBar = document.getElementById("sizeBar");
sizeBar.addEventListener("change", async () => {
  var size = sizeBar.value;
  column = size;
  row = size;
  cleanBoard();
  drawBoard();
});

function cleanBoard() {
  while (drawingBoard.firstChild) {
    drawingBoard.removeChild(drawingBoard.firstChild);
  }
}

function drawBoard() {
  for (let index = 0; index < column; index++) {
    var divsCol = document.createElement("div");
    divsCol.className = "divs divsCol ";
    divsCol.id = "col" + index;
    drawingBoard.appendChild(divsCol);
    for (let i = 0; i < row; i++) {
      var divsRow = document.createElement("div");
      divsRow.className = "divs divsRow divColor";
      divsRow.id = "row" + i + "col" + index;
      divsCol.appendChild(divsRow);
    }
  }
  setBrush(color);
}

function setBrush(color) {
  var divColor = document.getElementsByClassName("divColor");
  var arrayDivs = [...divColor];

  arrayDivs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      if (mouseDown) {
        div.style.backgroundColor = color;
      }
    });
  });
}

var favcolor = document.getElementById("favcolor");
favcolor.addEventListener("change", () => {
  setBrush(favcolor.value);
});
