import { socialLinks, personalInfo } from "../../data/portfolioData";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";

import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto">
            I'm always open to discussing exciting
            projects, collaborations, internships,
            hackathons, startup ideas, and innovative
            opportunities.
          </p>
        </div>

        {/* Email CTA */}

        <div
          className="
            mt-14
            text-center
          "
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="
              inline-block
              px-8
              py-4
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              transition-all
              duration-300
            "
          >
            Get In Touch
          </a>
        </div>

        {/* Social Icons */}

        <div
          className="
            mt-16
            flex
            justify-center
            flex-wrap
            gap-5
          "
        >
          {/* GitHub */}

          <a
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="
              w-16
              h-16
              rounded-full
              bg-[#24292e]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}

          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="
              w-16
              h-16
              rounded-full
              bg-[#0077B5]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedinIn />
          </a>

          {/* Email */}

          <a
            href={`mailto:${personalInfo.email}`}
            className="
              w-16
              h-16
              rounded-full
              bg-[#EA4335]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <MdEmail />
          </a>

          {/* LeetCode */}

          <a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noreferrer"
            className="
              w-16
              h-16
              rounded-full
              bg-[#F89F1B]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <SiLeetcode />
          </a>

          {/* GeeksforGeeks */}

          <a
            href={socialLinks.gfg}
            target="_blank"
            rel="noreferrer"
            className="
              w-16
              h-16
              rounded-full
              bg-[#2F8D46]
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <SiGeeksforgeeks />
          </a>

          {/* Twitter */}

          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noreferrer"
            className="
              w-16
              h-16
              rounded-full
              bg-black
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaXTwitter />
          </a>

          {/* Instagram */}

          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            className="
              w-16
              h-16
              rounded-full
              bg-gradient-to-r
              from-pink-500
              via-red-500
              to-yellow-500
              flex
              items-center
              justify-center
              text-white
              text-2xl
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaInstagram />
          </a>
        </div>

        {/* Email Text */}

        <div className="text-center mt-10">
          <p className="text-slate-400">
            {personalInfo.email}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;