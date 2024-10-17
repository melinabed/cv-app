/* eslint-disable react/prop-types */

function Education({
  formData,
  showMore,
  handleShowMore,
  handleSubmit,
  handleChange,
  months,
  years,
}) {
  return (
    <>
      <button className="sidebar-btn" onClick={handleShowMore}>
        Education Details {showMore ? "-" : "+"}
      </button>
      {showMore && (
        <form className="education" onSubmit={handleSubmit}>
          <label>School/Institution</label>
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
          />

          <label>Degree</label>
          <input
            type="text"
            placeholder="Bachelors in.."
            name="degree"
            value={formData.degree}
            onChange={handleChange}
          />

          <label>Start Date</label>
          <select
            name="eduStartMonth"
            id="months-selection"
            value={formData.eduStartMonth}
            onChange={handleChange}
          >
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="eduStartYear"
            id="year-selection"
            value={formData.eduStartYear}
            onChange={handleChange}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <label>End Date</label>
          <select
            name="eduEndMonth"
            id="months-selection"
            value={formData.eduEndMonth}
            onChange={handleChange}
          >
            <option value="">Month</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
          <select
            name="eduEndYear"
            id="year-selection"
            value={formData.eduEndYear}
            onChange={handleChange}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <button className="edit-btn">Edit</button>
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      )}
    </>
  );
}

export default Education;
