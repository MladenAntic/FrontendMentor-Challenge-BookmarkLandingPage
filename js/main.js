const form = document.querySelector("form");
const email = document.getElementById("email");
const contactBtn = document.querySelector(".contact-btn");
const errorMessage = document.querySelector(".error-message");
const iconError = document.querySelector(".icon-error");

const mobileNavigation = document.getElementById('mobile-navigation')
const toggleMenu = document.querySelector('.toggle-menu')
const desktopNavigationLogo = document.querySelector('.logo')
const mobileNavigationLogo = document.createElement('img')
mobileNavigationLogo.src = 'images/footer-logo.svg'
mobileNavigationLogo.alt = 'Mobile Navigation Logo'
const closeMenu = document.createElement('img')
closeMenu.src = 'images/icon-close.svg'
closeMenu.alt = 'Icon Close'
closeMenu.style.pointerEvents = 'all'
closeMenu.style.cursor = 'pointer'


contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!email.checkValidity() || email.value === "") {
    email.style.outline = "1px solid red";
    errorMessage.style.display = "block";
    if (window.innerWidth <= 768) {
      form.style.gap = "40px";
    }
    iconError.style.display = "block";
  } else {
    email.style.outline = "none";
    errorMessage.style.display = "none";
    iconError.style.display = "none";
    if (window.innerWidth <= 768) {
      form.style.gap = "20px";
    }
  }
});

toggleMenu.addEventListener('click', () => {
  mobileNavigation.style.display = 'flex'
  desktopNavigationLogo.replaceWith(mobileNavigationLogo)
  mobileNavigationLogo.style.zIndex = '100'
  toggleMenu.replaceWith(closeMenu)
  closeMenu.style.zIndex = '100'

  document.body.style.overflowY = 'hidden'
})

closeMenu.addEventListener('click', () => {
  mobileNavigation.style.display = 'none'
  mobileNavigationLogo.replaceWith(desktopNavigationLogo)
  closeMenu.replaceWith(toggleMenu)

  document.body.style.overflowY = 'scroll'
})

function hideMobileMenu() {
  if (window.innerWidth > 768) {
    mobileNavigation.style.display = 'none'
    closeMenu.replaceWith(toggleMenu)
    document.body.style.overflowY = 'scroll'
  }
}

window.addEventListener('resize', hideMobileMenu)
