console.log("js is connected")


let numCount = [9, 12, 9];
let count = [document.querySelector("#count1"), document.querySelector("#count2"), document.querySelector("#count3")];

function add(id) {
    numCount[id]++
    count[id].innerText = numCount[id]
}

