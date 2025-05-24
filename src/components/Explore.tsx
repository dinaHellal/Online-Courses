import exploreCss from "./explore.module.css";

export default function Explore(){
return ( 
<>
<div className={exploreCss.explore}></div>
  <div className={exploreCss.unlock}>
  <img src="/public/Icon Container.png" alt="Icon" />
  <h1> <span>Unlock</span> Your Creative Potential</h1>
  </div>
  <div className={exploreCss.sparkle}>
      <span className={exploreCss.ray1}></span>
      <span className={exploreCss.ray2}></span>
      <span className={exploreCss.ray3}></span>
    </div>
    <div className={exploreCss.hero}>
  <h2>with Online Design and Development Courses.</h2>
  <p>Learn from Industry Experts and Enhance Your Skills.</p>
    </div>
    <div className={exploreCss.btn}>
<button className={exploreCss.login}>Explore Courses</button>
<button className={exploreCss.pushRight}>View Pricing</button>

    </div>
</>
);
}
