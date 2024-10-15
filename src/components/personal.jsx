import { useState } from "react";

function PersonalDetails() {
  const [showMore, setShowMore] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <button className="sidebar-btn" onClick={() => setShowMore(!showMore)}>
        Personal Details {showMore ? "-" : "+"}
      </button>
      {showMore && (
        <form className="personal" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="janedoe23@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input
            type="tel"
            placeholder="123-456-7890"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label>Address</label>
          <input
            type="text"
            placeholder="123 Anywhere St"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />

          <label>About Me</label>
          <textarea
            placeholder="I like.."
            name="aboutMe"
            value={formData.aboutMe}
            onChange={handleChange}
          ></textarea>
          <button>Edit</button>
          <button type="submit">Add</button>
        </form>
      )}
    </>
  );
}

export default PersonalDetails;
