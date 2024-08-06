document.addEventListener('scroll', ()=> {
    const nav = document.getElementById("nav");
    const aside = document.getElementById('set-height');

    if (window.scrollY > aside.offsetHeight) {
        nav.classList.add('scrolled');
    }
    else {
        nav.classList.remove('scrolled');
    }
})

document.addEventListener('scroll',() => {
    const grid = document.getElementById("grid-template-box");
    const gridpass = document.getElementById("grid-template-box");

    if (window.scrollY >  gridpass.offsetHeight) {
        grid.classList.add('scrolled');
    }
    else {
        grid.classList.remove('scrolled');
    }
})

