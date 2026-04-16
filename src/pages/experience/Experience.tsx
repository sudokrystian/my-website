import "./experience.scss";
import { experienceDetails } from "../../constants/experienceData";

const Experience = () => {
  return (
    <div className="experience-div">
      <h3 className="experience-title">My experience</h3>
      <hr />

      {experienceDetails.map((job, jobIdx) => (
        <div key={job.company}>
          <div className="workexp-job-card">
            <div className="workexp-card-header">
              <img src={job.logo} alt={job.company} className="company-img" />
              <div>
                <h5>{job.company}</h5>
                <span className="job-date">{job.date}</span>
                <div className="job-role">{job.role}</div>
              </div>
            </div>

            <div className="jobskills-flex">
              <div className="workexp-sections-col">
                {job.sections.map((section) => (
                  <div className="workexp-section" key={section.title}>
                    <h6>{section.title}</h6>
                    {section.bullets && (
                      <div className="jobskills">
                        <ul>
                          {section.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {section.content &&
                      section.content.split("\n\n").map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                  </div>
                ))}
              </div>
              <div className="job-skills-images">
                {job.techImages.map((img) => (
                  <img key={img.alt} src={img.src} alt={img.alt} />
                ))}
              </div>
            </div>
          </div>

          {jobIdx < experienceDetails.length - 1 && (
            <hr className="experience-spacer" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
