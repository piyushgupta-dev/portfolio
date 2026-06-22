import { campusXcelerate } from "../../data/portfolioData";

function CampusImpact() {
  return (
    <section
      id="campusxcelerate"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Building More Than Products.
          </h2>

          <h3 className="mt-4 text-4xl md:text-5xl font-bold text-blue-500">
            Building Communities.
          </h3>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-md
            p-10
          "
        >
          <h3 className="text-3xl font-bold">
            {campusXcelerate.title}
          </h3>

          <p
            className="
              mt-6
              text-slate-400
              leading-relaxed
              max-w-4xl
            "
          >
            {campusXcelerate.description}
          </p>

          <div
            className="
              mt-10
              grid
              grid-cols-2
              md:grid-cols-4
              gap-6
            "
          >
            {campusXcelerate.stats.map((item) => (
              <div
                key={item.label}
                className="
                  rounded-2xl
                  bg-white/5
                  border
                  border-white/10
                  p-6
                  text-center
                "
              >
                <h4 className="text-4xl font-bold text-blue-400">
                  {item.value}
                </h4>

                <p className="mt-2 text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CampusImpact;