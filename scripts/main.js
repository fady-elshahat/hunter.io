// Open Mobile Nav
const navbarToggler = document.querySelector( ".navbar-toggler" );
const navLayout = document.querySelector( ".nav-layout" );
navbarToggler.addEventListener( "click", () => {
     navLayout.style.display = "block"
})

// Close Mobile Nav
const iconClose = document.querySelector( ".icon-close" );
iconClose.addEventListener( "click", () => {
     if ( navLayout.style.display = "block") {
          navLayout.style.display = "none"
     }
})