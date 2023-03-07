const images = document.querySelectorAll('.slide__images img')

let time = 4000,
    indexImage = 0,
    max = images.length

const changeImage = function() {
    images[indexImage].classList.remove('active')
    indexImage++

    if (indexImage >= max)
        indexImage = 0

    images[indexImage].classList.add('active')
}

const start = function() {
    setInterval(changeImage, time)
}

window.addEventListener('load', start)