import { useState } from "react";

function Experience() {
  const [showMore, setShowMore] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
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

          <label>Posistion Title</label>
          <input
            type="text"
            name="position"
            value={formData.position}
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

          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />

          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <button>Edit</button>
          <button type="submit">Add</button>
        </form>
      )}
    </>
  );
}

export default Experience;
