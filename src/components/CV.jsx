import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import { useState } from "react";
import "../styles/forms.css";

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
      <section className="form">
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
      <main className="resume">
        <section className="personal-details">
          <div>
            <h2>Personal Details</h2>
            <p>First Name: {data.firstName}</p>
            <p>Last Name: {data.lastName}</p>
            <p>Email: {data.email}</p>
          </div>
        </section>
        <section className="education">
          <div>
            <h2>Education</h2>
            <p>Degree: {data.degree}</p>
            <p>University: {data.university}</p>
            <p>Start Date: {data.startDate}</p>
            <p>End Date: {data.endDate}</p>
          </div>
        </section>
        <section className="experience">
          <h2>Experience</h2>
          <p>{data.experience}</p>
        </section>
      </main>
    </>
  );
}

export default CV;
