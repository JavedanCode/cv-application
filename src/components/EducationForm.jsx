export default function EducationForm({ onChange, value }) {
  return (
    <form className="form-inputs">
      <label htmlFor="degree">Degree</label>
      <select
        name="degree"
        id="degree"
        value={value.degree}
        onChange={(e) => onChange("degree", e.target.value)}
      >
        <option value="Associate">Associate</option>
        <option value="Bacholar's">Bacholar's</option>
        <option value="Master's">Master's</option>
        <option value="Doctoral">Doctoral</option>
      </select>
      <label htmlFor="university">University</label>
      <input
        type="text"
        id="university"
        value={value.university}
        onChange={(e) => onChange("university", e.target.value)}
      />
      <label htmlFor="start-date">Start Date</label>
      <input
        type="date"
        name="start-date"
        id="start-date"
        value={value.startDate}
        onChange={(e) => onChange("startDate", e.target.value)}
      />
      <label htmlFor="end-date">End Date</label>
      <input
        type="date"
        name="end-date"
        id="end-date"
        value={value.endDate}
        onChange={(e) => onChange("endDate", e.target.value)}
      />
    </form>
  );
}
