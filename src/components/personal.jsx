/* eslint-disable react/prop-types */

function PersonalDetails({
  formData,
  showMore,
  handleShowMore,
  handleSubmit,
  handleChange,
}) {
  return (
    <>
      <button className="sidebar-btn" onClick={handleShowMore}>
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
          <button className="edit-btn">Edit</button>
          <button className="add-btn" type="submit">
            Add
          </button>
        </form>
      )}
    </>
  );
}

export default PersonalDetails;
