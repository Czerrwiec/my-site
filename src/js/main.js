const nav = document.querySelector('.navigation');
const navBtn = document.querySelector('.hamburger');
const links = document.querySelectorAll('.nav-link')
const hamburger = document.querySelector('.hamburger-inner')
const footerYear = document.querySelector('.footer-year')
const formBtn = document.querySelector('.form-btn')



const handleNav = () => {
    navBtn.classList.toggle('is-active');
    nav.classList.toggle('navigation--active');
    // document.body.classList.toggle('sticky-body');
    

    // links.forEach(item => {
    //     item.addEventListener('click', () => {
    //         navMobile.classList.remove('nav-mobile--active');
    //         navBtn.classList.remove('is-active');
    //         document.body.classList.remove('sticky-body');
    //     })
    // })
}


const addPulseAnimation = (e) => {
    const top = e.clientY
    const left = e.clientX

    const btnTopPosition = top - e.target.getBoundingClientRect().top
    const btnLeftPosition = left - e.target.offsetLeft 
    
    const circle = document.createElement('span')
    circle.classList.add('circle')

    e.target.appendChild(circle)
    circle.style.top = btnTopPosition +'px'
    circle.style.left = btnLeftPosition + 'px'
}


const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}


navBtn.addEventListener('click', handleNav)
formBtn.addEventListener('click', addPulseAnimation)


handleCurrentYear()