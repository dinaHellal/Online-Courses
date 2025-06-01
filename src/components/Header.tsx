import Logo from "./Logo";
import style from "./header.module.css";
import navLinks from "../constants/navLinks.json";
export default function Header(){
return ( 
<>
<header className="position-sticky   p-10 m-auto h-10 w-full bg-white ">

<Logo />
<nav >
  <div className="navbar  p-5">
<label htmlFor="toggle">
  <img src="/menu_icon_152806.png" alt="" />
</label>
<input type="checkbox" id="toggle"/>
  <ul className="pt-5">
{navLinks.map((link)=>(
  <li>{link}</li>
))}
<li className={style.pushRight}><a href="#signup"  >Sign Up </a></li>
<li><a href="#login" className={style.login}>Log In </a></li>


  </ul>
  </div>
</nav>
</header>

</>
);
}