import {
  achievements,
  certifications,
  openSourcePrograms,
} from "../../data/portfolioData";

import AchievementCard from "../../components/ui/AchievementCard";

function Achievements() {
  return (
    <section
      id="achievements"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements & Impact
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
            A snapshot of my journey through
            hackathons, open source,
            leadership, and continuous learning.
          </p>
        </div>

        {/* Achievement Cards */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {achievements.map((item) => (
            <AchievementCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        {/* Open Source */}

        <div
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            p-8
          "
        >
          <h3 className="text-3xl font-bold">
            Open Source Contributions
          </h3>

          <div className="flex flex-wrap gap-4 mt-8">
            {openSourcePrograms.map((item) => (
              <span
                key={item}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-blue-500/10
                  text-blue-400
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">
            Certifications
          </h3>

          <div
            className="
              grid
              md:grid-cols-2
              lg:grid-cols-3
              gap-6
            "
          >
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-6
                "
              >
                <h4 className="font-semibold">
                  {cert.title}
                </h4>

                <p className="mt-3 text-blue-400">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Achievements;