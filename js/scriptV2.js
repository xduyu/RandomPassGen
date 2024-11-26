// const input = document.getElementById("input-data")
// const showPassword = document.querySelector("label > input[type=checkbox]")




// function showPassFunction(flag) {
//     if (flag) {
//         input.setAttribute("type", "text")
//     } else {
//         input.setAttribute("type", "password")
//     }
// }

// showPassword.addEventListener('click', () => {
//     showPassFunction(showPassword.checked)

//     console.log(showPassword.checked)

// })

// // console.log(showPassword)


// item = document.querySelectorAll(".element")

// console.log(item)

// item.forEach(el => {
//     if (el.dataset.idvalue == 1) {
//         el.textContent = "1"
//     }
//     if (el.dataset.idvalue == 2) {
//         el.textContent = "2"
//     }
//     if (el.dataset.idvalue == 3) {
//         el.hidden = true
//     }
// });
const block = document.querySelector(".black")
const btnGen = document.querySelector(".genButton")


block.style.background = block.dataset.background;

btnGen.addEventListener('click', () => {
    block.style.background = getRandomColor()
})


function getRandomColor() {
    let data = '0123456789ABCDEFabcdef';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += data[Math.floor(Math.random() * 22)]
    }

    return color
}









