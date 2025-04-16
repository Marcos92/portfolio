import { Project } from "../Project";
import ProjectPanel from "./ProjectPanel";

interface Props {
  projects: Project[];
  handlePanelClick: (index: number) => void;
}

export default function ProjectList({ projects, handlePanelClick }: Props) {
  return (
    <>
      <div className="grid">
        {projects.map((project, index) => (
          <ProjectPanel
            key={index}
            project={project}
            handleClick={() => {
              handlePanelClick(index);
            }}
          />
        ))}
      </div>
    </>
  );
}
