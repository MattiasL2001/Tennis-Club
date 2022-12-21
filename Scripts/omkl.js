const button = document.querySelectorAll('input[type="button"]')[0];
console.log(button)

const selectElement = document.querySelector("#bokaBana");
console.log(selectElement);

let banor = localStorage.getItem("banor")
banor = JSON.parse(banor);

for (let i = 0; i < banor.length; i++) {
    if (banor[i] == "ledig") {
        let newOption = new Option("Bana " + (i + 1), (i + 1));
        selectElement.add(newOption, undefined);
    }
}

document.querySelectorAll('input[type="button"]')[0].onclick = function() {
    console.log("clicked")
}