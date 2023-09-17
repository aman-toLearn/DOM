                                 //DOM
                                 
//selecting element
var a = document.querySelector("h2")
console.log(a)

//changing html
a.innerHTML = "changed html"

//changing css
a.style.color = "red"
a.style.backgroundColor = "black"
//Event Listener

a.addEventListener("click", function () {
    console.log("HEY")
    a.innerHTML = "i am changed now"
    a.style.color = "yellow"
    a.style.backgroundColor = "black"
})

//bulb
var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"
        flag = 1
    }
    else {
        bulb.style.backgroundColor = "transparent"
        flag = 0
    }
})

//SELECTING MULTIPLE ELEMENTS AT A SAME TIME 
//single selection
var h = document.querySelector("h1")
console.log(h)

//multiple selection
var g = document.querySelectorAll("h1")
console.log(g)

g.forEach(function (e) {
    console.log(e)
})

//getElementById
document.getElementById("box")
//getElementByClassName
document.getElementsByClassName("class")

//textContent

var box = document.querySelector("#box")
// box.innerHTML= "<h1>Hello</h1>"
box.textContent = "<h1>Hello</h1>"

