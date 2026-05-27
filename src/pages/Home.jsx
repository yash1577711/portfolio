import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, FileDown, User, Briefcase, Server } from "lucide-react";
import { Link } from "react-router-dom";
import cvPdf from "@/assets/files/cv_pdf/Yash_Kumar_Resume_Final.pdf";

const Home = () => {
  const email = "yk1577711@gmail.com";
  const whatsappNumber = "919971758962";

  const highlights = [
    {
      icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Backend Focus",
      value: "Python, Django, SQL",
    },
    {
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Experience",
      value: "Freelance + Client Work",
    },
    {
      icon: <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />,
      title: "Availability",
      value: "Full-Time Roles",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Yash Kumar
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Full-Stack & Backend Developer
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 sm:mb-5 max-w-3xl mx-auto px-2 sm:px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Backend Developer and AI/ML diploma student with hands-on experience
          building full-stack applications using Python, Django, and
          PostgreSQL.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base text-gray-500 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Open to full-time developer roles | Delhi, India
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              Download Resume
            </a>
            <Link
              to="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              About Me
            </Link>
          </div>

          <a
            href={`mailto:${email}`}
            className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
            aria-label={`Email: ${email}`}
          >
            {email}
          </a>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              className="bg-white/5 border border-white/10 rounded-xl p-4"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center justify-center mb-2 text-gray-300">
                {item.icon}
              </div>
              <p className="text-sm text-gray-400">{item.title}</p>
              <p className="text-sm sm:text-base font-semibold text-white mt-1">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-3 justify-items-center gap-6 mt-8 sm:mt-10 max-w-xs sm:max-w-none mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://github.com/yash1577711/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            aria-label="Visit GitHub profile"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <span className="text-xs sm:text-sm text-gray-400">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/yash-kumar-398267279/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            aria-label="Visit LinkedIn profile"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <span className="text-xs sm:text-sm text-gray-400">LinkedIn</span>
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            aria-label="Contact via WhatsApp"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 w-full max-w-[200px]">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors mx-auto" />
            </div>
            <span className="text-xs sm:text-sm text-gray-400">WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
