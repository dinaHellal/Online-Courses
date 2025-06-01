import coursesStyle from "./courses.module.css"
export default function Courses(){
  return(
    <>
  <div className={coursesStyle.courses}>
          <h2>Our Courses</h2>
      <div className={coursesStyle.course}>
        <div className={coursesStyle.headerRow}>
        </div>
        <p>
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem <br />
          nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          <button className={coursesStyle.view}>View All</button>
        </p>
      </div>
  </div>
    
    </>
  )
}
