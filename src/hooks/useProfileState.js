import { useState } from "react";
import profiledata from "../data/profiledata";

const useProfileState = () => {
  const [aboutMe, setAboutMe] = useState(profiledata.aboutMe);
  const [aboutMeDraft, setAboutMeDraft] = useState(aboutMe);

  const [workExp, setWorkExp] = useState(profiledata.workExperience);
  const [workExpDraft, setWorkExpDraft] = useState(workExp);

  const [education, setEducation] = useState(profiledata.education);
  const [educationDraft, setEducationDraft] = useState(education);

  const [skills, setSkills] = useState(profiledata.skills);
  const [skillsDraft, setSkillsDraft] = useState(skills);

  const [resume, setResume] = useState(profiledata.resume);
  const [resumeDraft, setResumeDraft] = useState(resume);

  const updateState = (title) => {
    if (title === "About Me") {
      setAboutMe(aboutMeDraft);
    } else if (title === "Work Experience") {
      setWorkExp(workExpDraft);
    } else if (title === "Education") {
      setEducation(educationDraft);
    } else if (title === "Skills") {
      setSkills(skillsDraft);
    } else if (title === "Resume") {
      setResume(resumeDraft);
    }
  };

  return {
    aboutMe,
    aboutMeDraft,
    setAboutMeDraft,
    workExp,
    workExpDraft,
    setWorkExpDraft,
    education,
    educationDraft,
    setEducationDraft,
    skills,
    skillsDraft,
    setSkillsDraft,
    resume,
    resumeDraft,
    setResumeDraft,
    updateState,
  };
};

export default useProfileState;
