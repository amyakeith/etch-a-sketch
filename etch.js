// get the number of divs from the user
function getNumItems()
{
  var str = prompt("We're going to make an Etch-A-Sketch!\nYou get to determine how detailed our Etch-A-Sketch will be.\nPlease enter a multiple of 4.");
  var x = Number(str);
  return x;
}

// set the measurement for the height and width of the boxes that will make up the div
function getItemSize(n)
{
  var size = 356 / n;
  return size;
}


function fillGrid(num, itemHeight, itemWidth)
{
  // create an array of divs
  const grid = [];
  for (var counter = 1; counter <= Math.pow(num, 2); counter++)
  {
    grid[counter] = document.createElement('div');
    grid[counter].classList.add("smallDiv");
  }

  // populate the box with an x by y sized grid
  const box = document.querySelector("#box");
  for (var counter1 = 1; counter1 <= Math.pow(num, 2); counter1++)
  {
    grid[counter1].style.display = "inline-block";
    grid[counter1].style.height = itemHeight + "px";
    grid[counter1].style.width = itemWidth + "px";
    box.appendChild(grid[counter1]);
  }

  const gridBox = document.querySelectorAll(".smallDiv");
  gridBox.forEach((div) => {
  div.addEventListener('mouseenter', function(e){
    e.target.style.background = "black";
  });
});
}

// when clear button is clicked, erase the current grid and prompt
//user to ask
function clearGrid()
{
  const bigBox = document.querySelector("#box");
  while (bigBox.firstChild) {
  bigBox.removeChild(bigBox.firstChild);
  }
}

var numBoxes = getNumItems();
var gridItemSize = getItemSize(numBoxes);
fillGrid(numBoxes, gridItemSize, gridItemSize);


var btn = document.querySelector('#button');
btn.addEventListener('click', function(){
  clearGrid();
  var numBoxes = getNumItems();
  var gridItemSize = getItemSize(numBoxes);
  fillGrid(numBoxes, gridItemSize, gridItemSize);
});
