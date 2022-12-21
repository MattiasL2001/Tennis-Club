//these arrays tells whether the tennis courts and saunas are available or not

banor = [
    "ledig",
    "upptagen",
    "ledig",
    "upptagen",
    "ledig",
    "ledig"
]

bastur = [
    "upptagen",
    "ledig"
]

//variable that checks if the hamburger menu button is clicked or not
let isClicked = false
//gets the hamburger element from the DOM
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

//stores these arrays in the localstorage on the web browser
localStorage.setItem("banor", JSON.stringify(banor))
localStorage.setItem("bastur", JSON.stringify(bastur))

const banorElement = document.querySelectorAll(".tableData td")
console.log(banorElement)

//loops through until all of the banor and bastu elements are iterated
for (let i = 0; i < banor.length + bastur.length; i++) {
    
    if (i < banor.length) {
        //Makes the first letter from the banor array capital, formatting purposes
        banor[i] = banor[i].charAt(0).toUpperCase() + banor[i].slice(1)

        banorElement[i].innerHTML = "Bana " + (i + 1) +": " + banor[i]
    }
    else {
        //Makes the first letter from the bastu array capital, formatting purposes
        bastur[i - banor.length] = bastur[i - banor.length].charAt(0).toUpperCase() + bastur[i - banor.length].slice(1)
        banorElement[i].innerHTML = "Bastu " + (i + 1 - banor.length) + ": " + bastur[i - banor.length]
    }

    //changes the colors of the boxes surrounding the court and sauna texts
    //the color depends on if the saunas or courts are available for
    //reservation or not
    if (banorElement[i].innerHTML.includes("Upptagen")) {
        banorElement[i].style.backgroundColor = "rgb(255, 50, 0)"
    }
    else {
        banorElement[i].style.backgroundColor = "rgb(5, 167, 5)"
    }
}