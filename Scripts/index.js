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

localStorage.setItem("banor", JSON.stringify(banor))
localStorage.setItem("bastur", JSON.stringify(bastur))

const banorElement = document.querySelectorAll(".tableData td")
console.log(banorElement)

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

    if (banorElement[i].innerHTML.includes("Upptagen")) {
        banorElement[i].style.backgroundColor = "rgb(255, 50, 0)"
    }
    else {
        banorElement[i].style.backgroundColor = "rgb(5, 167, 5)"
    }
}

for (let i = 0; i < banorElement.length; i++) {
    
    if (banorElement[i].innerHTML.includes("Bana") && banorElement[i].innerHTML.includes("Ledig")) {
        console.log("bana ledig")
    }
    else if (banorElement[i].innerHTML.includes("Bana") && banorElement[i].innerHTML.includes("Upptagen")) {
        console.log("bana upptagen")
    }
    if (banorElement[i].innerHTML.includes("Bastu") && banorElement[i].innerHTML.includes("Ledig")) {
        console.log("bastu ledig")
    }
    else if (banorElement[i].innerHTML.includes("Bastu") && banorElement[i].innerHTML.includes("Upptagen")) {
        console.log("bastu upptagen")
    }
}