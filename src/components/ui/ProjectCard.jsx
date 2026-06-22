function ProjectCard({ project }) {
  return (
    <div
      className="
        rounded-3xl
        overflow-hidden
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >
      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-56
          object-cover
        "
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p
          className="
            mt-4
            text-slate-400
            leading-relaxed
          "
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                rounded-full
                bg-blue-500/10
                text-blue-400
                text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            mt-6
            px-5
            py-2
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
  );
}

export default ProjectCard;