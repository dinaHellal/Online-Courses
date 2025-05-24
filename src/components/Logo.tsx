import logoCss from "./logo.module.css";

export default function Logo(){
return ( 
<>
<div className={logoCss.logo}>
  <a href="/">
  <img src="/Logo (1).png" alt="Logo" className="logo" />
  </a>
  
</div>
</>
);
}