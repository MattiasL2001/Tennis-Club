//gets the button of the page
const button = document.querySelectorAll('input[type="button"]')[0]

//gets the select element from the DOM
const selectElement = document.querySelector("#bokaBana")

//gets the courts from localstorage and converts them back from JSON readable to array object
let banor = localStorage.getItem("banor")
banor = JSON.parse(banor)

for (let i = 0; i < banor.length; i++) {
    if (banor[i] == "ledig") {
        //if the court is available for reservation, it gets added to the graphical
        //dropdown list as an alternative
        let newOption = new Option("Bana " + (i + 1), (i + 1))
        selectElement.add(newOption, undefined)
    }
}

//triggers when the button on the page is clicked
document.querySelectorAll('input[type="button"]')[0].onclick = function() {
    console.log("clicked")
}

let isClicked = false
const menu = document.querySelectorAll("#hamburger img")[0]

//function that triggers when the hamburger menu is clicked
menu.onclick = function() {
    if (isClicked) {
        //hides the menu
        document.querySelector("nav").style.display = "none"
        document.querySelector(".nav-links").style.display = "none"
        isClicked = false
    }
    else {
        //displays the menu
        document.querySelector("nav").style.display = "inline"
        document.querySelector(".nav-links").style.display = "inline"
        isClicked = true
    }
}