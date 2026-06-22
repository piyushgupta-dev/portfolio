function AchievementCard({
  value,
  title,
  description,
}) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        p-6
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      <h3 className="text-4xl font-bold text-blue-400">
        {value}
      </h3>

      <h4 className="mt-4 text-xl font-semibold">
        {title}
      </h4>

      <p className="mt-3 text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default AchievementCard;