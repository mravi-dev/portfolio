import React from "react";
import SkillTable from "../components/SkillTable";

const Skills = () => {
  return (
    <>
      <section className="heading">My Skills</section>
      <section className="content">
        <br />
        <br />
        <div>
          <SkillTable />
        </div>
      </section>
    </>
  );
};

export default Skills;
