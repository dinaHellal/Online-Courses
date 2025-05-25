import benefitCss from "./benefits.module.css";

export default function Benefits() {
  return (
    <div className={benefitCss.benefits}>
      <div className={benefitCss.benefit}>
        <div className={benefitCss.headerRow}>
          <h2>Benefits</h2>
          <button className={benefitCss.view}>View All</button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem
          <br /> nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div className={benefitCss.cards}>
      <div className={benefitCss.card}>
<h2>01</h2>
<h3>Flexible Learning Schedule</h3>
<p>Fit your coursework around your existing commitments and obligations.</p>
</div>
      <div className={benefitCss.card}>
<h2>02</h2>
<h3>Expert Instruction</h3>
<p>Learn from industry experts who have hands-on experience in design and development.</p>
</div>
      <div className={benefitCss.card}>
<h2>03</h2>
<h3>Diverse Course Offerings</h3>
<p>Explore a wide range of design and development courses covering various topics.</p>
</div>
      <div className={benefitCss.card}>
<h2>04</h2>
<h3>Updated Curriculum</h3>
<p>Access courses with up-to-date content reflecting the latest trends and industry practices.</p>
</div>
      <div className={benefitCss.card}>
<h2>05</h2>
<h3>Practical Projects and Assignments</h3>
<p>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
</div>
      <div className={benefitCss.card}>
<h2>06</h2>
<h3>Interactive Learning Environment</h3>
<p>Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.</p>
</div>

      </div>
    </div>
  );
}
