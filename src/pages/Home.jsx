import { Link } from "react-router-dom";
import projects from "../projects";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="grid-page-link-card">
          {projects.map((project, index) => {
            const card = (
              <div className="page-link-card stacked">
                <img
                  src={project.thumbnail}
                  alt={project.thumbnailAlt || ""}
                  className="page-link-card__img"
                />
                <div className="page-link-card__content">
                  <h2 className="inter-normal">{project.title}</h2>
                  {project.cardSubtitle && (
                    <p className="inter-normal">{project.cardSubtitle}</p>
                  )}
                </div>
              </div>
            );

            if (project.externalUrl) {
              return (
                <Link
                  key={index}
                  to={project.externalUrl}
                  target="_blank"
                  className="link"
                >
                  {card}
                </Link>
              );
            }

            return (
              <Link key={index} to={`/${project.slug}`} className="link">
                {card}
              </Link>
            );
          })}
        </div>
        <div className="centered">
          <div className="text-wrapper montserrat-normal">
            <p>©2023 by Steffen Sasse</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
