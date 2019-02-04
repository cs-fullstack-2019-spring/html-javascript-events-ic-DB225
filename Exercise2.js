//Create an HTML page containing 3 different buttons, one saying GREEN, one saying YELLOW, and one saying YELLOW.
//When the User holds the mouse over one of the buttons, change the background color according to the text value on the button.
//BONUS Challenges:
//Add header text that states the current Color (e.g. !The current Color is SELECTEDCOLOR' with the name of the current color in place of SELECTEDCOLOR
document.getElementById("colors").onmouseover = function(e) {
    if (e.target && e.target.nodeName === "button"){
        console.log(e.target.textContent);
    }
};