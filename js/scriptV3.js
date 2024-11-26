let text = document.createElement('p')
text.innerHTML = `

    Текст добавлен

`;

// let infoBloack = document.querySelector(".info")

// 


let infoBloack = document.querySelector(".info")
let addBlock = document.getElementById('addBlockBtn')
addBlock.addEventListener('click', () => {
    infoBloack.append(text)
})


const list = document.querySelector('.list')
const beforeEl = document.createElement('div')
const afterEl = document.createElement('div')
const appendEl = document.createElement('div')
const prepandEl = document.createElement('div')

beforeEl.textContent = `before`;
afterEl.textContent = `after`;
appendEl.textContent = `append`;
prepandEl.textContent = `prepand`;

list.append(appendEl)
list.before(beforeEl)
list.after(afterEl)
list.prepend(prepandEl)


















