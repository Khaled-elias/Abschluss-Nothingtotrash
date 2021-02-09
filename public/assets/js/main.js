// const MenuIcon = document.querySelector('.Hamburger_menu')
// const Burger = document.querySelector('.Burger')
// const NavUl=document.querySelector('.NavBar')

// MenuIcon.addEventListener('click',()=>{
// Burger.classList.toggle("change")
// })
// Burger.addEventListener('click',()=>{
//     NavUl.classList.toggle(".nav-active")
//     })


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
// navlinks.forEach((link,index)=>{
//     link.style.amimation = `smoke 0.5s ease forwards ${index /7 * 0.3}`
    
// })
    }
    NavSlid();