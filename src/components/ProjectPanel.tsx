import { Project } from "../Project";

interface Props {
  project: Project;
  handleClick: () => void;
}

export default function ProjectPanel({ project, handleClick }: Props) {
  return (
    <>
      <div
        className="panel zoom"
        style={{ backgroundColor: project.backgroundColor }}
        onClick={handleClick}
      >
        <div className="title">
          {project.logo.length > 0 ? (
            <img src={project.logo}></img>
          ) : (
            <p style={{ color: project.textColor }}>{project.name}</p>
          )}
        </div>
        <img src={project.image}></img>
      </div>
    </>
  );
}
