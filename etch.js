// get the number of divs from the user
var str = prompt("We're going to make an Etch-A-Sketch!\nYou get to determine how detailed our Etch-A-Sketch will be.\nPlease enter a multiple of 4.");
var x = Number(str);

// set the height of the boxes that will make up the div
var gridItemHeight = 480 / x;
var gridItemWidth = 480 / x;

function fillGrid(numItems, itemHeight, itemWidth)
{
  // create an array of divs
  const grid = [];
  for (var counter = 0; counter <= Math.pow(numItems, 2); counter++)
  {
    grid[counter] = document.createElement('div');
    grid[counter].classList.add("smallDiv");
  }

  // populate the box with an x by y sized grid
  const box = document.querySelector("#box");
  for (var counter1 = 0; counter1 <= Math.pow(numItems, 2); counter1++)
  {
    grid[counter1].style.display = "inline-block";
    grid[counter1].style.height = itemHeight + "px";
    grid[counter1].style.width = itemWidth + "px";
    box.appendChild(grid[counter1]);
  }

  const smallDivs = document.querySelectorAll(".smallDiv");
  smallDivs.forEach((div) => {
  div.addEventListener('mouseenter', function(e){
    e.target.style.background = "black";
  });
});

}

fillGrid(x, gridItemHeight, gridItemWidth);



// when clear button is clicked, erase the current grid and prompt user to ask
