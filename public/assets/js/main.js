
    const NavSlid =()=>{
        const HamburgerMenu = document.querySelector('.Hamburger_menu')
        const NavUl=document.querySelector('.NavBar')
        const Burger = document.querySelector('.Burger')
        const navlinks= document.querySelectorAll("Ul_Nav li")
        HamburgerMenu.addEventListener('click',()=>{
            NavUl.classList.toggle("nav-active")
        }
        )
        HamburgerMenu.addEventListener('click',()=>{
        Burger.classList.toggle("change")
})

    }
    NavSlid();