import React from "react";
import myResume from "../../assets/files/Farha_Resume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import { TbArrowBigDownLines } from "react-icons/tb";
function Resume() {
  return (
    <div>
      <section id="welcome-section" className="download-intro">
        <div className="flex-row">
          <h2 className="section-title primary-border" id="resume-section">My Resume</h2>
        </div>
        <div className="flex-row">
          <div className="download-info">
            <div className="download-text">
              <a href={myResume} className="download-logo" download>
                <BsCloudDownload />
              </a>
              <p>
                Please feel free to check out my list of Developer
                Proficiencies!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* // This is the resume language */}
      <section id="home-page-body" className="resume-body">
        <div className="article column1">
          <p className="column-title">Beginner Level</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <TbArrowBigDownLines />
              </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>GIT</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>


            </ul>
          </p>
        </div>

        <div className="article column2">
          {/* <p><img src="./assets/images/streamline-icon-ai-robot-waiter@48x48.PNG"></p> */}

          <p className="column-title">Intermediate Level</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <TbArrowBigDownLines />
              </li>
              <li>Web APIs</li>
              <li>Third-Party APIs/jQuery</li>
              <li>Server APIs/AJAX</li>
            </ul>
          </p>
        </div>
        <div className="article column3">
          {/* <p><img src="./assets/images/streamline-icon-soft-drinks-glass-ice@48x48.PNG"></p> */}
          <p className="column-title">Advanced Level</p>
          <p className="column-text">
            <ul>
              <li className="logo">
                <TbArrowBigDownLines />
              </li>
              <li>ES6 & Node.js</li>
              <li>Test-Driven Development</li>
              <li>React</li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Resume;
