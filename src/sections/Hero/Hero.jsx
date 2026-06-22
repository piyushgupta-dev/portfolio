
import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";

function Hero() {
  const stats = [
    { value: "4+", label: "Projects Built" },
    { value: "5+", label: "Hackathons" },
    { value: "2x", label: "Finalist" },
    { value: "500+", label: "Students Reached" },
  ];

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        px-6
        pt-24
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[500px]
          h-[500px]
          bg-blue-500/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[500px]
          h-[500px]
          bg-purple-500/10
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          max-w-7xl
          mx-auto
          w-full
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          {/* Availability Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              text-blue-400
              text-sm
              mb-8
            "
          >
            🚀 Available for Opportunities
          </div>

          {/* Main Heading */}

          <h1
            className="
              text-4xl
              md:text-6xl
              xl:text-7xl
              font-black
              leading-tight
            "
          >
            Turning Ideas Into
            <span className="block text-blue-500">
              Products,
            </span>
            Communities &
            <span className="block text-purple-500">
              Real Impact.
            </span>
          </h1>

          {/* Name */}

          <h2
            className="
              mt-8
              text-3xl
              md:text-4xl
              font-bold
            "
          >
            {personalInfo.name}
          </h2>

          {/* Headline */}

          <p
            className="
              mt-4
              text-lg
              text-slate-400
            "
          >
            {personalInfo.headline}
          </p>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              leading-relaxed
              text-slate-400
            "
          >
            {personalInfo.description}
          </p>

          {/* CTA Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="
                px-6
                py-3
                rounded-xl
                bg-blue-600
                hover:bg-blue-700
                transition-all
              "
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="
                px-6
                py-3
                rounded-xl
                border
                border-white/20
                hover:border-blue-500
                transition-all
              "
            >
              Let's Connect
            </a>
          </div>

          {/* Stats */}

          <div
            className="
              mt-12
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
            "
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-md
                  p-4
                "
              >
                <h3 className="text-2xl font-bold">
                  {item.value}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

