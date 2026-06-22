import { education } from "../../data/portfolioData";

function About() {
  const highlights = [
    "🏆 Hackathon Finalist",
    "🚀 Founder @ CampusXcelerate",
    "💻 Open Source Contributor",
    "📱 Mobile App Developer",
  ];

  return (
    <section
      id="about"
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
            About Me
          </h2>

          <p
            className="
              mt-6
              max-w-3xl
              mx-auto
              text-slate-400
              leading-relaxed
            "
          >
            Passionate Full Stack & Mobile Developer
            focused on building impactful digital
            products, contributing to open source,
            participating in hackathons, and empowering
            students through communities and innovation.
          </p>
        </div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-8
          "
        >
          {/* Education */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
            "
          >
            <h3 className="text-2xl font-bold mb-6">
              Education
            </h3>

            <h4 className="text-xl font-semibold">
              {education.degree}
            </h4>

            <p className="mt-3 text-slate-400">
              {education.college}
            </p>

            <p className="mt-2 text-slate-400">
              {education.university}
            </p>

            <p className="mt-4 text-blue-400">
              {education.duration}
            </p>
          </div>

          {/* Highlights */}

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
            "
          >
            <h3 className="text-2xl font-bold mb-6">
              Highlights
            </h3>

            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="
                    p-4
                    rounded-xl
                    bg-white/5
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;