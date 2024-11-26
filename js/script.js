// // // // // getElementById()

// // // // const p1 = document.getElementById("first")

// // // // console.log(p1)



// // // // //getElementsByClassName

// // // // const p2a3 = document.getElementsByClassName("ele")
// // // // console.log(p2a3)


// // // // //getElementByTagName


// // // // const elemntsTag = document.getElementsByTagName("p")
// // // // console.log(elemntsTag)



// // // // // выбирает по css селектору  
// // // // // Тоесть и по классу



// // // // const p12 = document.querySelector(".ele")



// // // // console.log(p12)

// // // // const p13 = document.querySelectorAll(".ele")

// // // // console.log(p13)



// // // const bookList = document.querySelector(".books")


// // // console.log(bookList.childNodes)
// // // console.log(bookList.children)


// // // const bookTwo = document.querySelector(".book02")

// // // console.log(bookTwo)


// // // console.log(bookTwo.nextSibling)

// // // console.log(bookTwo.previousSibling)

// // // console.log(bookTwo.nextElementSibling)

// // // console.log(bookTwo.previousElementSibling)


// // const text = document.querySelector(".text")
// // // console.log(text.innerHTML)
// // // console.log(text.textContent)
// // // console.log(text.outerHTML)



// // // text.innerHTML = "hello, world!";
// // // text.textContent = "Hello, world!";

// // text.hidden = true


// // console.log(text.hidden)































// const a = 1;

// const b = 2;

// console.log(`${a + b}`)






// const inputData = document.getElementById("inputSquare")
// const inputDataSecond = document.getElementById("inputSquareSecond")
// const btnSquare = document.getElementById("btn-square")
// const btnPeremitr = document.getElementById("btn-peremitr")
// const btnAll = document.getElementById("btn-all")
// const resSquare = document.getElementById("res-square")
// const resPerimtr = document.getElementById("res-perimtr")


// btnSquare.addEventListener('click', () => {
//     const dataFirst = inputData.value
//     const dataSecond = inputDataSecond.value
//     const res = dataFirst * dataSecond
//     resSquare.textContent = `Результат: ${res}`
// })

// btnPeremitr.addEventListener('click', () => {
//     const dataFirst = inputData.value
//     const dataSecond = inputDataSecond.value
//     const res = inputData.value * 2 + inputDataSecond.value * 2
//     resPerimtr.textContent = `Результат: ${res}`
// })

// btnAll.addEventListener('click', () => {
//     resPerimtr.textContent = `Результат: ${inputData.value * 2 + inputDataSecond.value * 2}`
//     resSquare.textContent = `Результат: ${inputData.value * inputDataSecond.value}`
// })


// // btnSquare.addEventListener('click', () => {
// //     const squareData = inputData.value // 2 (допустим)
// //     const res = squareData * squareData; // на число * число
// //     resSquare.textContent = `Результат: ${res}`; // Рузельтат
// // })

// // btnPeremitr.addEventListener('click', () => {
// //     const squareData = inputData.value // 2 (допустим)
// //     const res = squareData * 4; // число * 4
// //     resPerimtr.textContent = `Результат: ${res}`; // Рузельтат
// // })

// // btnAll.addEventListener('click', () => {
// //     resPerimtr.textContent = `Результат: ${inputData.value * inputData.value}`; // Рузельтат
// //     resSquare.textContent = `Результат: ${inputData.value * 4}`; // Рузельтат
// // })



// // has atribute

// console.log(inputData.hasAttribute("type", "placeholder"))
// console.log(inputData.getAttribute("type"))
