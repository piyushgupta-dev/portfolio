import SkillCard from "../../components/ui/SkillCard";
import { skills } from "../../data/portfolioData";

function Skills() {
  return (
    <section
      id="skills"
      className="
        py-28
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Skills & Technologies
          </h2>

          <p
            className="
              mt-6
              text-slate-400
              max-w-3xl
              mx-auto
            "
          >
            Technologies, frameworks and tools I use
            to build scalable web and mobile
            applications.
          </p>
        </div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;