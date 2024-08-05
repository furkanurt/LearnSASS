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