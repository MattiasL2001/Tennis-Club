const button = document.querySelectorAll('input[type="button"]')[0];
console.log(button)

const selectElement = document.querySelector("#bokaBastu");
console.log(selectElement);

let bastu = localStorage.getItem("bastur")
bastu = JSON.parse(bastu);

for (let i = 0; i < bastu.length; i++) {
    if (bastu[i] == "ledig") {
        let newOption = new Option("Bastu " + (i + 1), (i + 1));
        selectElement.add(newOption, undefined);
    }
}

document.querySelectorAll('input[type="button"]')[0].onclick = function() {
    console.log("clicked")
}