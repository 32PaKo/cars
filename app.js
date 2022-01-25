let main = document.querySelector('.main'),
    btn = document.getElementById('down'),
    services = document.querySelectorAll('.service'),
    second = document.querySelector('.second'),
    first = document.querySelector('.first'),
    third = document.querySelector('.third'),
    closeInfo = document.querySelector('.close'),
    fillBtn = document.querySelector('#fill'),
    foorth = document.querySelector('.foorth'),
    submit = document.querySelector('.submit'),
    thx = document.querySelector('.thx'),
    form = document.querySelector('.form')

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