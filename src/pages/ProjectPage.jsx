import { useParams } from "react-router-dom";
import projects from "../projects";

const ProjectPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="container">
        <div className="centered">
          <h2 className="inter-normal">project not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="centered">
        <h2 className="inter-normal">{project.title}</h2>
      </div>
      <div className="grid">
        {project.sections.map((section, index) => {
          if (section.type === "image") {
            return (
              <div
                key={index}
                className={section.span2 ? "grid-item span-2" : "grid-item"}
              >
                <div className="img-container">
                  <img src={section.src} alt={section.alt || ""} />
                </div>
              </div>
            );
          }

          if (section.type === "text") {
            return (
              <div key={index} className="grid-item">
                <div className="text-wrapper montserrat-normal">
                  {section.paragraphs.map((para, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                  ))}
                </div>
              </div>
            );
          }

          if (section.type === "empty") {
            return <div key={index} className="grid-item" />;
          }

          return null;
        })}
      </div>
      <div className="centered">
        <h3 className="inter-normal max-20">{project.credit}</h3>
      </div>
      <div className="centered">
        <div className="text-wrapper montserrat-normal">
          <p>©2023 by Steffen Sasse</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
