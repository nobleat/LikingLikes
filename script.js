console.log("js is connected")

var count = 1
var countElement = document.querySelector("h3")

function add1() {
    count++
    console.log(count);
    countElement.innerText = count + "Likes"
}