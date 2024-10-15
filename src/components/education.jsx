/* eslint-disable react/prop-types */

function Education({
  formData,
  showMore,
  handleShowMore,
  handleSubmit,
  handleChange,
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
          <input
            type="date"
            name="eduStart"
            value={formData.eduStart}
            onChange={handleChange}
          />

          <label>End Date</label>
          <input
            type="date"
            name="eduEnd"
            value={formData.eduEnd}
            onChange={handleChange}
          />

          <button>Edit</button>
          <button type="submit">Add</button>
        </form>
      )}
    </>
  );
}

export default Education;
