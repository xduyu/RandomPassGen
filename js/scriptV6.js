const inputData = document.getElementById('input-data')
const resData = document.getElementById('res')

// inputData.addEventListener('input', () => {
//     resData.textContent = inputData.value
// })

inputData.addEventListener('change', () => {
    resData.textContent = inputData.value
})



const block = document.querySelector('.block')

block.addEventListener('mouseover', () => {
    block.style.backgroundColor = 'blue';
})

block.addEventListener('mouseout', () => {
    block.style.backgroundColor = 'red';
})