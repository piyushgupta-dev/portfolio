import { motion } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import developerImg from "../../assets/images/developer.png";

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
          grid
          lg:grid-cols-[1.2fr_0.8fr]
          gap-10
          items-center
        "
      >
        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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

          <p
            className="
              mt-4
              text-lg
              text-slate-400
            "
          >
            {personalInfo.headline}
          </p>

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

          {/* CTA BUTTONS */}

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

          {/* STATS */}

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

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center items-center">

          {/* React */}

          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              top-10
              left-0
              bg-white/10
              backdrop-blur-md
              px-4
              py-2
              rounded-xl
              text-sm
              border
              border-white/10
            "
          >
            React
          </motion.div>

          {/* Firebase */}

          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              absolute
              bottom-20
              left-2
              bg-white/10
              backdrop-blur-md
              px-4
              py-2
              rounded-xl
              text-sm
              border
              border-white/10
            "
          >
            Firebase
          </motion.div>

          {/* React Native */}

          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{
              repeat: Infinity,
              duration: 6,
            }}
            className="
              absolute
              top-16
              right-0
              bg-white/10
              backdrop-blur-md
              px-4
              py-2
              rounded-xl
              text-sm
              border
              border-white/10
            "
          >
            React Native
          </motion.div>

          {/* Node */}

          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{
              repeat: Infinity,
              duration: 7,
            }}
            className="
              absolute
              bottom-20
              right-2
              bg-white/10
              backdrop-blur-md
              px-4
              py-2
              rounded-xl
              text-sm
              border
              border-white/10
            "
          >
            Node.js
          </motion.div>

          {/* AI */}

          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{
              repeat: Infinity,
              duration: 8,
            }}
            className="
              absolute
              top-1/2
              -right-8
              bg-white/10
              backdrop-blur-md
              px-4
              py-2
              rounded-xl
              text-sm
              border
              border-white/10
            "
          >
            AI
          </motion.div>

          {/* Avatar */}

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={developerImg}
            alt="Developer"
            className="
              relative
              z-10
              w-[300px]
              md:w-[420px]
              lg:w-[460px]
              object-contain
              select-none
              pointer-events-none
            "
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;