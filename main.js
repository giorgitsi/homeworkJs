let card1 = document.querySelector(".card-1")
let btnCreateP = document.querySelector(".btn-create-p")


let card2 = document.querySelector(".card-2")
let createBtn = document.querySelector(".create-btn")

let card3 = document.querySelector(".card-3")
let create5pBtn = document.querySelector(".create-5p-btn")

let card4 = document.querySelector(".card-4")
let btnRandomNum = document.querySelector(".btn-random-num")


// Homework 1
btnCreateP.addEventListener("click", function () {
    let p = document.createElement("p")
    p.textContent = "Hello"
    card1.append(p)
})



// Homework 2
createBtn.addEventListener("click", function () {
    let btn = document.createElement("button")
    btn.textContent = "Click me!"
    card2.append(btn)
})



// Homework 3
create5pBtn.addEventListener("click", function (){
    let p1 = document.createElement("p")
    p1.textContent = "Hello"
    card3.append(p1)

    let p2 = document.createElement("p")
    p2.textContent = "Hello"
    card3.append(p2)

    let p3 = document.createElement("p")
    p3.textContent = "Hello"
    card3.append(p3)

    let p4 = document.createElement("p")
    p4.textContent = "Hello"
    card3.append(p4)

    let p5 = document.createElement("p")
    p5.textContent = "Hello"
    card3.append(p5)
})


btnRandomNum.addEventListener("click", function (){
    let h2 = document.createElement("h2")
    let num = Math.floor(Math.random()*101)
    h2.textContent = num
    card4.append(h2)
})