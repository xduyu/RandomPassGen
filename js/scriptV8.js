const quantityItems = document.querySelector('.quantity')
const btnRandomGen = document.getElementById('btnRandom')
const res = document.querySelector('.res')
const resPass = document.getElementById('resPass')
const showPass = document.getElementById('showPass')

function generatePassword(length) {
    const strData = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890[];',./+-=_";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.round(Math.random() * strData.length)
        password += strData[randomIndex]
    }

    return password;
}

btnRandomGen.addEventListener('click', () => {
    let value = +quantityItems.value;
    if (!value) {
        alert('Введите число')
        return
    }
    if (value < 8 || value > 16) {
        alert("Введите число от 8 до 16")
        return
    }

    res.style.display = 'block'
    resPass.value = generatePassword(value)
    console.log(generatePassword(value))
})

showPass.addEventListener('click', () => {
    resPass.setAttribute("type", showPass.checked ? "text" : "password")
})