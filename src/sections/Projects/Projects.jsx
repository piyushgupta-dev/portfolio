import { projects } from "../../data/portfolioData";
import ProjectCard from "../../components/ui/ProjectCard";

function Projects() {
  return (
    <section
      id="projects"
      className="
        py-28
        px-6
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Featured Projects
          </h2>

          <p
            className="
              mt-6
              text-slate-400
              max-w-3xl
              mx-auto
            "
          >
            A collection of products, mobile apps,
            and solutions I have built while
            learning, competing in hackathons,
            and solving real-world problems.
          </p>
        </div>

        {/* Featured Project */}

        <div
          className="
            rounded-3xl
            overflow-hidden
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            mb-12
          "
        >
          <img
            src={projects[0].image}
            alt={projects[0].title}
            className="
              w-full
              h-[400px]
              object-cover
            "
          />

          <div className="p-8">
            <h3 className="text-4xl font-bold">
              {projects[0].title}
            </h3>

            <p
              className="
                mt-6
                text-slate-400
                leading-relaxed
              "
            >
              {projects[0].description}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {projects[0].tech.map((item) => (
                <span
                  key={item}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-blue-500/10
                    text-blue-400
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={projects[0].github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                mt-8
                px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition
              "
            >
              View Project
            </a>
          </div>
        </div>

        {/* Other Projects */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {projects.slice(1).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;