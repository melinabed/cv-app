import { useState } from "react";

function Education() {
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  const handleShowMore = () => setShowMore(!showMore);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />

          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
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
