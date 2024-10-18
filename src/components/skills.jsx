/* eslint-disable react/prop-types */

function Skills({
  skills,
  selectedSkill,
  showMore,
  handleShowMore,
  handleNewSkill,
  handleDelete,
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
      <ul className="skill-list">
        {selectedSkill.map((skill) => (
          <li className="skill-item" key={skill}>
            {skill}
            <button onClick={() => handleDelete(skill)}>Del</button>
          </li>
        ))}
      </ul>
    </>
  );
}

//Make a delete button for each skill item
export default Skills;
