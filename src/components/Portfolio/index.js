import React from "react";
import weatherDashImage from "../../assets/images/Weather_Dash.png";
import workDaySchedulerImage from "../../assets/images/WorkDay_Scheduler.png";
import teamProfileGeneratorImage from "../../assets/images/TeamProfile_Generator.png";
import recipemovieImage from "../../assets/images/Recipe_Movie.png";
import bootstrapPortfolioImage from "../../assets/images/Bootstrap_Portfolio.png";
import codeQuizImage from "../../assets/images/Code_Quiz.png";

function Portfolio() {
  return (

    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://khnfarha1987.github.io/Weather-Dashboard-Server-APIs-Project/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                An application that utilizes the Server side APIs, OpenWeather, to retrieve weather data for cities and displays the weather (temperature, humidity, wind speed) of the current day and the weather (temperature, humidity and wind speed) for the five following days.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://khnfarha1987.github.io/Work-day-Scheduler-Moment.js/">
                {" "}
                <img
                  src={workDaySchedulerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="WorkDay_Scheduler"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Scheduler</h4>
              <p>
                Created a simple calendar application that allows a user to save events for each hour of the day. Depends on time present, past and future.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://khnfarha1987.github.io/TDD-Team-Profile-Generator/output/team.html">
                {" "}
                <img
                  src={teamProfileGeneratorImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="TeamProfile_Generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Team Profile Generator</h4>
              <p>
                This application will take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://khnfarha1987.github.io/receipe-movies-project/">
                {" "}
                <img
                  src={recipemovieImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Recipe_Movie"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Combination Of Recipe Movie</h4>
              <p>
                A website for generating ideas for movies and food based off of an ingredient.
                Our idea was to create a website for a date or movie night that would provide inspiration on what the user could watch and cook for the evening.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://khnfarha1987.github.io/Bootstrap-Farha_Portfolio/">
                {" "}
                <img
                  src={bootstrapPortfolioImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Bootstrap_Portfolio"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Bootstrap Portfolio</h4>
              <p>
                This porfolio contains information provided on HTML,CSS and Bootstrap, each section shows the detail information of that specific topic. Responsive design ensures that web applications render well on a variety of devices and window or screen sizes.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://khnfarha1987.github.io/Web-API-Project-Code-Quiz/">
                {" "}
                <img
                  src={codeQuizImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Code_Quiz"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Code Quiz</h4>
              <p>
                This application create a timed, multiple-choice coding quiz that can keep track of high scores and quiz-takers' initials. Coding quiz showing question with multiple anwers. If we select right answer than score will +10 and if we will give wrong answer then timer will be -10second reduce.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
