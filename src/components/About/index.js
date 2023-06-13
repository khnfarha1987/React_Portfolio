import React from "react";
import profileImage from "../../assets/large/Profile/farha.jpeg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Farha Khan. I am currently living in London.
            I completed my Masters in Biotechnology Degree in 2009 from India.
            Currently I am Bootcamp student of University of Birmingham.
            I moved in United Kingdom in June 2019. I am working in Hospitality
            in IHG Crimson Hotel 'Crown Plaza'. I am mother of two lovely kids,
            I like to spend time with my family. I learned a lot frontend technologies from this Bootcamp course such as HTML, CSS, JavaScript, Node and React in this Bootcamp Course. I am hoping to put this newly-learned skill to good use and land a promising new career as a web developer.

          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
