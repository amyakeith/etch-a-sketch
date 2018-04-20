// get the number of divs from the user
var str = prompt("We're going to make an Etch-A-Sketch!\nYou get to determine how detailed our Etch-A-Sketch will be.\nPlease enter a multiple of 4 (the higher the number, the more detailed the sketch!).");
var x = Number(str);
var y = x;

// set the height of the boxes that will make up the div
var gridItemHeight = 480 / y;
var gridItemWidth = 480 / x;

// create an array of divs
const grid = [];
for (var counter = 0; counter <= (x * y); counter++)
{
  grid[counter] = document.createElement('div');
}

// populate the box with an x by y sized grid
const box = document.querySelector("#box");
for (var counter1 = 0; counter1 < (y * x); counter1++)
{
    grid[counter1].style.display = "inline-block";
    grid[counter1].style.height = gridItemHeight + "px";
    grid[counter1].style.width = gridItemWidth + "px";
    grid[counter1].style.marginTop = -1 + "px";
    box.appendChild(grid[counter1]);
}

// 
