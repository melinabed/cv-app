/* eslint-disable react/prop-types */

function Skills({
  skills,
  selectedSkill,
  showMore,
  handleShowMore,
  handleNewSkill,
}) {
  return (
    <>
      <button className="sidebar-btn" onClick={handleShowMore}>
        Skills
      </button>
      {showMore && (
        <select onChange={handleNewSkill}>
          <option value="">Select a skill</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      )}
      <ul>
        {selectedSkill.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );
}

export default Skills;
