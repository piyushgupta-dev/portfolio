function SkillCard({ category, items }) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500/30
      "
    >
      <h3 className="text-xl font-bold mb-5">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((skill) => (
          <span
            key={skill}
            className="
              px-3
              py-1
              rounded-full
              bg-blue-500/10
              text-blue-400
              text-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCard;