function GeneralForm({ onChange, value }) {
  return (
    <form className="form-inputs">
      <h2>Personal Details</h2>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        value={value.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        value={value.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={value.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
    </form>
  );
}

export default GeneralForm;
