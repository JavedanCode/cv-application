import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";
import "../styles/cv.css";

function CV() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    degree: "",
    university: "",
    startDate: "",
    endDate: "",
    experience: "",
  });

  function handleChange(field, value) {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <>
      <main className="app">
        <article className="resume">
          <div className="resume-content">
            <section className="personal-details">
              <div>
                <div className="titles">
                  {" "}
                  <h2>Personal Details</h2>
                </div>

                <p>First Name: {data.firstName}</p>
                <p>Last Name: {data.lastName}</p>
                <p>Email: {data.email}</p>
              </div>
            </section>
            <section className="education">
              <div>
                <div className="titles">
                  {" "}
                  <h2>Education</h2>
                </div>
                <p>Degree: {data.degree}</p>
                <p>University: {data.university}</p>
                <p>Start Date: {data.startDate}</p>
                <p>End Date: {data.endDate}</p>
              </div>
            </section>
            <section className="experience">
              <div className="titles">
                {" "}
                <h2>Experience</h2>
              </div>
              <p>{data.experience}</p>
            </section>
          </div>
        </article>
        <section className="forms-panel">
          <div className="general-form">
            <GeneralForm
              value={{ firstName: data.firstName, lastName: data.lastName }}
              onChange={handleChange}
            ></GeneralForm>
          </div>
          <div className="education-form">
            <EducationForm
              value={{
                degree: data.degree,
                university: data.university,
                startDate: data.startDate,
                endDate: data.endDate,
              }}
              onChange={handleChange}
            ></EducationForm>
          </div>
          <div className="experience-form">
            <ExperienceForm
              value={{
                experience: data.experience,
              }}
              onChange={handleChange}
            ></ExperienceForm>
          </div>
        </section>
      </main>
    </>
  );
}

export default CV;
