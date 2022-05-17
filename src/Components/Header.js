import React from "react"
import styles from "../Modules/Header.module.css"
import logo from "../Images/logo.svg"
import hamburger from "../Images/icon-hamburger.svg"
import close from "../Images/icon-close.svg"


export default function Header () {

    const [nav, setNav] = React.useState(hamburger);
    const [mobileNav, setMobileNav] = React.useState(false);

    function toggleHamburger () {
       setNav(currNav => currNav === hamburger ? close: hamburger);
    }

    React.useEffect(() => {
        if(window.innerWidth <= 1000) {
            setMobileNav(curr => !curr);
        }
    }, [nav])

    function hideMobileNav () {
        setNav(hamburger);
    }

    return (
        <section>
           <div>
              <img src = {logo} alt = ""/>
           </div>

           <nav>
              <ul className = {!mobileNav? styles.open: null} >
                <li onClick = {hideMobileNav} ><a href = "#">Home</a></li>
                <li onClick = {hideMobileNav} ><a href = "#" >About</a></li>
                <li onClick = {hideMobileNav} ><a href = "#" >Contact</a></li>
                <li  onClick = {hideMobileNav} ><a href = "#" >Blog</a></li>
                <li onClick = {hideMobileNav} ><a href = "#" >Careers</a></li>
              </ul>
           </nav>

           <button>Request Invite</button>

           <div className = {styles.hamburger} onClick = {toggleHamburger}>
              <img src = {nav}  alt = ""/>
           </div>

        </section>
    )
}

