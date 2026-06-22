function Footer() {
  return (
    <footer
      className="
        border-t
        border-white/10
        py-10
        mt-20
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-xl font-bold">
          Piyush Gupta
        </h3>

        <p className="mt-3 text-slate-400">
          Full Stack & Mobile App Developer
        </p>

        <p className="mt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Piyush Gupta.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;