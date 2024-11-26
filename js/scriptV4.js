let blockContainer = document.querySelector('#block')

const img = document.createElement('img')
img.src = 'https://freepngimg.com/save/174960-vector-photos-trash-can-garbage/512x512';
img.style.height = '79px'
blockContainer.append(img)


let text = document.createElement('p')

text.innerHTML = `
text
`;

blockContainer.prepend(text)


const list = document.querySelector('.ul')

// before
list.insertAdjacentHTML('beforebegin', '<p>Do blocka</p>')

// After
list.insertAdjacentHTML('afterend', '<p>Posle blocka</p>')


// Afterend
list.insertAdjacentHTML('afterbegin', '<p>Posle blocka</p>')








const inputData = document.getElementById('inputData')
const btnres = document.getElementById('btn')
const res = document.getElementById('resList')


btnres.addEventListener("click", () => {
    res.innerHTML = '';
    let numberData = +inputData.value;
    // console.log(typeof numberData)
    if (isNaN(numberData)) {
        const errorText = document.createElement('p')
        errorText.innerHTML = 'Корректно введите число!'
        res.append(errorText)
        return
    }
    for (let i = 1; i <= numberData; i++) {
        if (numberData % i == 0) {
            const item = document.createElement('li')
            item.textContent = i;
            res.append(item)
        }
    }
});




