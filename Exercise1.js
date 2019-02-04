//Create an HTML file with a button. Using JavaScript, each time a button is clicked use the array below to change the color of the Body background to the corresponding index.
//The colors do not have to start over once the last color is reached.
//["blue", "red", "yellow", "brown", "orange", "purple", "black", "green"]
// BONUS Challenges:
//Make the colors recycle once the last color is reached.

let color_idx = 0;
let color_list = ["blue", "red", "yellow", "brown", "orange", "purple", "black", "green"];
let btn = document.querySelector("button");

btn.onclick =  function () {
    let rdnCol = color_list[color_idx];
    document.body.style.backgroundColor = rdnCol;
    //See if I need to restart
    if (color_idx < color_list.length){
        color_idx++;
    }
    else{
        color_idx = 0;
    }
};
