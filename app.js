const main = document.querySelector('.main')
const btn = document.getElementById('down')
const services = document.querySelectorAll('.service')
const second = document.querySelector('.second')
const first = document.querySelector('.first')
const third = document.querySelector('.third')
const closeInfo = document.querySelector('.close')
const fillBtn = document.querySelector('#fill')
const foorth = document.querySelector('.foorth')
const submit = document.querySelector('.submit')
const thx = document.querySelector('.thx')
const form = document.querySelector('.form')
services.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundSize = `120% 120%`
    })
    element.addEventListener('mouseout', () => {
        element.style.backgroundSize = `100% 100%`
    })
    element.addEventListener('click', openInfo)
});


btn.addEventListener('click', () => {
    // second.style.marginTop = `-100vh`
    first.style.marginTop = `-100vh`
})
closeInfo.addEventListener('click', () => {
    third.style.marginTop = `0`
})

function openInfo() {
    third.style.marginTop = `-100vh`
}
fillBtn.addEventListener('click', () => {
    foorth.style.marginTop = "-100vh"
})
submit.addEventListener('click', () => {
    form.style.opacity = "0"
    setTimeout(() => {
        thx.style.opacity = "1"
    }, 1000)
})