import { innovationLab } from "../../data/portfolioData";

function InnovationLab() {
  return (
    <section
      id="innovation"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Innovation Lab
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
            Exploring ideas, solving real-world
            challenges, and transforming concepts
            into impactful solutions.
          </p>
        </div>

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {innovationLab.map((item) => (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-md
                p-8
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  text-slate-400
                  leading-relaxed
                "
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default InnovationLab;