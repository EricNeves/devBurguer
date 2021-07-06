const btnCloseBoxGallery = document.querySelector('.close__box__gallery')
const btnOpenBoxGallery  = document.querySelectorAll('.gallery img')
const btnOpenMenuResp    = document.querySelector('.menu__resp a')
const boxGallery         = document.querySelector('.box__gallery')
const preloader          = document.querySelector('.preloader')
const menuLinks          = document.querySelectorAll('header nav li a')
const menuResp           = document.querySelector('header nav')
const imageBox           = document.querySelector('.box__img img')
const header             = document.querySelector('header')


const handleClick = () => {
    menuResp.classList.toggle('menu__resp__active')
}

const clickMenuLink = () => {
    menuLinks.forEach(item => {
        item.onclick = () => {
            handleClick()
        }
    })
}
clickMenuLink()

const openBoxGallery = () => {
    btnOpenBoxGallery.forEach(item => {
        item.onclick = () => {
            boxGallery.classList.add('active')
            imageBox.src = item.src
        }
    })
    btnCloseBoxGallery.onclick = () => {
        boxGallery.classList.remove('active')
    }
}
openBoxGallery()

const scrolled = () => {
    if ( window.scrollY >= 220 )
        header.classList.add('active')
    else
        header.classList.remove('active')
}

const load = () => {
    preloader.classList.add('finish')
}

window.addEventListener('scroll', scrolled)
window.addEventListener('load', load)
btnOpenMenuResp.addEventListener('click', handleClick)