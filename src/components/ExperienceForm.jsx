export default function ExperienceForm({ onChange, value }) {
  return (
    <form className="form-inputs">
      <label htmlFor="experience">Experience</label>
      <textarea
        name="experience"
        id="experience"
        placeholder="Write you're experiences"
        value={value.experience}
        onChange={(e) => onChange("experience", e.target.value)}
      ></textarea>
    </form>
  );
}
