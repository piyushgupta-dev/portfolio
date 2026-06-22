import { experiences } from "../../data/portfolioData";

function Experience() {
  return (
    <section
      id="experience"
      className="
        py-28
        px-6
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <div className="text-center mb-20">
          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
            "
          >
            Experience & Leadership
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-slate-400
            "
          >
            My journey across communities,
            leadership roles, student initiatives,
            and technical ecosystems.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">
          {/* Center Line */}

          <div
            className="
              absolute
              left-4
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-blue-500
              via-purple-500
              to-cyan-500
            "
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`
                  relative
                  flex
                  flex-col
                  md:flex-row
                  items-start
                  ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }
                `}
              >
                {/* Content */}

                <div className="md:w-1/2 px-10">
                  <div
                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-md
                      p-6
                      hover:border-blue-500/30
                      transition-all
                      duration-300
                    "
                  >
                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="mt-2 text-blue-400">
                      {exp.company}
                    </p>

                    <p className="mt-4 text-slate-400">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Dot */}

                <div
                  className="
                    absolute
                    left-[8px]
                    md:left-1/2
                    md:-translate-x-1/2
                    top-8
                    w-6
                    h-6
                    rounded-full
                    bg-blue-500
                    border-4
                    border-[#050816]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;