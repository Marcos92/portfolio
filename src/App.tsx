import { useState } from "react";
import "./App.css";
import ProfileHeader from "./components/ProfileHeader.tsx";
import ProjectList from "./components/ProjectList.tsx";
import ProjectPage from "./components/ProjectPage.tsx";
import SocialHeader from "./components/SocialHeader.tsx";
import { projects } from "./data.ts";

function App() {
  const [currentProject, setCurrentProject] = useState(-1);

  return (
    <>
      <header>
        <ProfileHeader />
        <SocialHeader />
      </header>

      {currentProject < 0 && (
        <div>
          <div className="intro">
            Game designer and programmer, sometimes an artist and a musician.
          </div>
          <ProjectList
            projects={projects}
            handlePanelClick={setCurrentProject}
          />
        </div>
      )}

      {currentProject >= 0 && (
        <ProjectPage
          project={projects[currentProject]}
          handleReturnClick={() => setCurrentProject(-1)}
        />
      )}
    </>
  );
}

export default App;
