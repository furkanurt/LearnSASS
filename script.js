document.addEventListener('scroll', () => {
    const nav = document.getElementById("nav");
    const aside = document.getElementById('set-height');
    const artheader = document.getElementById('artisth1');
    const gridBoxes = document.querySelectorAll('.grid-template-box');
    const gridBoxes2 = document.querySelectorAll('.grid-template-box-2');
    const gridBoxes3 = document.querySelectorAll('.grid-template-box-3');
    const gridBoxes4 = document.querySelectorAll('.grid-template-box-4');

    if (window.scrollY > aside.offsetHeight) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    if (window.scrollY > aside.offsetHeight) {
        artheader.classList.add('aı');
    } else {
        artheader.classList.remove('aı');
    }

    gridBoxes.forEach(gridBox => {
        if (window.scrollY > aside.offsetHeight) {
            gridBox.classList.add('scrolled1');
        } else {
            gridBox.classList.remove('scrolled1');
        }
    });

    gridBoxes2.forEach(gridBox => {
        if (window.scrollY > aside.offsetHeight) {
            gridBox.classList.add('scrolled2');
        } else {
            gridBox.classList.remove('scrolled2');
        }
    });

    gridBoxes3.forEach(gridBox => {
        if (window.scrollY > aside.offsetHeight) {
            gridBox.classList.add('scrolled3');
        } else {
            gridBox.classList.remove('scrolled3');
        }
    });
    gridBoxes4.forEach(gridBox => {
        if (window.scrollY > aside.offsetHeight) {
            gridBox.classList.add('scrolled4');
        } else {
            gridBox.classList.remove('scrolled4');
        }
    });

    
});
