import { useState } from "react";
import "./App.css";
import PersonalDetails from "./components/personal";
import Education from "./components/education";
import Experience from "./components/experience";

//Parent (ALL FOR ONE :))
function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  //Sets up a formData object that can be updated with hook
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    aboutMe: "",
    school: "",
    degree: "",
    eduStartMonth: "",
    eduStartYear: "",
    eduEndMonth: "",
    eduEndYear: "",
    companyName: "",
    position: "",
    exStartMonth: "",
    exStartYear: "",
    exEndMonth: "",
    exEndYear: "",
    description: "",
  });

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //Function uses a loop to generate start and end years for year selection array
  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let year = endYear; year >= startYear; year--) {
      years.push(year);
    }
    return years;
  };

  const years = generateYears(1900, 2024);

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
      <div className="container">
        <div className="sidebar">
          <PersonalDetails
            formData={formData}
            showMore={activeIndex === 0}
            handleShowMore={() => setActiveIndex(0)}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
          <Education
            formData={formData}
            showMore={activeIndex === 1}
            handleShowMore={() => setActiveIndex(1)}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            months={months}
            years={years}
          />
          <Experience
            formData={formData}
            showMore={activeIndex === 2}
            handleShowMore={() => setActiveIndex(2)}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            months={months}
            years={years}
          />
        </div>
        <div className="resume">
          <header>
            <h1>Jane Doe</h1>
            <h3>Web Developer</h3>
          </header>
          <aside>
            <div className="contact">
              <h2>CONTACT</h2>
              <div>123-457-7890</div>
              <div>janedoe@gmail.com</div>
              <div>123 Anywhere St</div>
            </div>
            <div className="edu-details">
              <h2>EDUCATION</h2>

              <div>Devry</div>
              <div>Bachelor in Technology</div>
              <div>07/17- 01/24</div>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li>Communication</li>
                <li>Attention to detail</li>
                <li>Adaptability</li>
                <li>Computer literacy</li>
              </ul>
            </div>
          </aside>
          <main>
            <div className="about-me">
              <h2>ABOUT ME</h2>
              <div>
                <i>
                  I&apos;m a passionate web developer with a strong background
                  in creating responsive, user-friendly websites and web
                  applications. I specialize in front-end development using
                  technologies like HTML, CSS, JavaScript, and modern
                  frameworks, with a keen eye for design and usability.
                  Constantly learning and adapting to new tools and trends, I
                  strive to build seamless digital experiences that not only
                  meet business goals but also enhance user engagement.
                </i>
              </div>
            </div>
            <div className="work">
              <h2>WORK EXPERIENCE</h2>
              <ul>
                <li>
                  <div>Jan 2022- Present</div>
                  <div>
                    <b>Web Developer</b>
                  </div>
                </li>
                <li>
                  <div>Jan 2022- Present</div>
                  <div>
                    <b>Cashier</b>
                  </div>
                </li>
              </ul>
            </div>
            <div className="references">
              <h2>REFERENCES</h2>
              <div className="card">
                <div>John Smith</div>
                <div>276-162-1693</div>
                <div>johnsmith83@gmail.com</div>
              </div>
              <br />
              <div className="card">
                <div>Justine Jackson</div>
                <div>873-036-52056</div>
                <div>justinej@gmail.com</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
