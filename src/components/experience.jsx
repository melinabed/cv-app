/* eslint-disable react/prop-types */
function Experience({
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
        Experience {showMore ? "-" : "+"}
      </button>
      {showMore && (
        <form className="experience" onSubmit={handleSubmit}>
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />

          <label>Position Title</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />

          <label>Start Date</label>
          <select
            name="exStartMonth"
            id="months-selection"
            value={formData.exStartMonth}
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
            name="exStartYear"
            id="year-selection"
            value={formData.exStartYear}
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
            name="exEndMonth"
            id="months-selection"
            value={formData.exEndMonth}
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
            name="exEndYear"
            id="year-selection"
            value={formData.exEndYear}
            onChange={handleChange}
          >
            <option value="">Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <button className="edit-btn">Edit</button>
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      )}
    </>
  );
}

export default Experience;
