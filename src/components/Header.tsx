import Logo from "./Logo";
import style from "./header.module.css";
export default function Header(){
return ( 
<>
<header className={style.header}>

<Logo />
<nav >
  <div className="navbar">
<label htmlFor="toggle">
  <img src="/menu_icon_152806.png" alt="" />
</label>
<input type="checkbox" id="toggle"/>
  <ul>
<li > <a href="#home" className={style.home}>Home</a></li>
<li><a href="#courses">Courses</a></li>
<li><a href="#about">About Us </a></li>
<li><a href="#pricing">Pricing </a></li>
<li><a href="#contact">Contact </a></li>
<li className={style.pushRight}><a href="#signup"  >Sign Up </a></li>
<li><a href="#login" className={style.login}>Log In </a></li>


  </ul>
  </div>
</nav>
</header>

</>
);
}