import { useState } from "react";
import { Project } from "../Project";

interface Props {
  project: Project;
  handleClick: () => void;
}

export default function ProjectPanel({ project, handleClick }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  const hasLogo = !!project.logo && project.logo.length > 0;
  const hasImage = !!project.image && project.image.length > 0 && !imageFailed;
  const logoOnly = hasLogo && !hasImage;

  return (
    <>
      <div
        className={`panel zoom${logoOnly ? " logo-only" : ""}`}
        style={{ backgroundColor: project.backgroundColor }}
        onClick={handleClick}
      >
        <div className="title">
          {hasLogo ? (
            <img src={project.logo}></img>
          ) : (
            <p style={{ color: project.textColor }}>{project.name}</p>
          )}
        </div>
        {hasImage && (
          <img src={project.image} onError={() => setImageFailed(true)}></img>
        )}
      </div>
    </>
  );
}