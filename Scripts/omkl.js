const button = document.querySelectorAll('input[type="button"]')[0]
console.log(button)

const selectElement = document.querySelector("#bokaBana")
console.log(selectElement)

let banor = localStorage.getItem("banor")
banor = JSON.parse(banor)

for (let i = 0; i < banor.length; i++) {
    if (banor[i] == "ledig") {
        let newOption = new Option("Bana " + (i + 1), (i + 1))
        selectElement.add(newOption, undefined)
    }
}

document.querySelectorAll('input[type="button"]')[0].onclick = function() {
    console.log("clicked")
}

let isClicked = false
const menu = document.querySelectorAll("#hamburger img")[0]

menu.onclick = function() {
    if (isClicked) {
        document.querySelector("nav").style.display = "none"
        document.querySelector(".nav-links").style.display = "none"
        isClicked = false
    }
    else {
        console.log("gdrgj")
        document.querySelector("nav").style.display = "inline"
        document.querySelector(".nav-links").style.display = "inline"
        isClicked = true
    }
}