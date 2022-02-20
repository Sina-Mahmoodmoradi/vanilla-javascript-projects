const pageDiv = document.querySelector('.page')
const colorDiv = document.querySelector('.backgroundColor')
colorDiv.innerText = 'Background Color : Rgb ( 0 , 0 , 0 )'

const randomNumber = () => Math.floor(Math.random() * 256)

const btn = document.querySelector('.btn')
// console.log(btn)
btn.addEventListener('click', () => {
    let r = randomNumber()
    let g = randomNumber()
    let b = randomNumber()
    text = `Background Color : Rgb ( ${r} , ${g} , ${b} )`
    // console.log(text)
    pageDiv.style.backgroundColor = `rgb(${r},${g},${b})`
    colorDiv.innerText = text
})
