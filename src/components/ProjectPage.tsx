import { useState } from "react";
import { Project } from "../Project";
import Parser from "html-react-parser";

interface Props {
  project: Project;
  handleReturnClick: () => void;
}

export default function ProjectPage({ project, handleReturnClick }: Props) {
  const [imageFailed, setImageFailed] = useState(false);

  const hasImage = !!project.image && project.image.length > 0 && !imageFailed;

  return (
    <>
      <a className="return-btn" onClick={handleReturnClick}>
        <i className="fa-solid fa-backward fa-2xl zoom"></i>
      </a>
      <div className="page">
        <h1>{Parser(project.name)}</h1>
        {hasImage && (
          <img src={project.image} onError={() => setImageFailed(true)} />
        )}
        <p>{Parser(project.description)}</p>
      </div>
    </>
  );
}