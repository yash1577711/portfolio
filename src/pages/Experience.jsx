import { motion } from "framer-motion";
import { Briefcase, MapPin, Building2, ArrowRight } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const experiences = [
  {
    title: "Full-Stack Web Developer",
    company: "Camplaby (Freelance)",
    location: "Delhi, India",
    period: "Aug 2025 - Dec 2025",
    description: [
      "Designed and delivered a complete production-grade website from scratch using Webflow, HTML, CSS, and JavaScript.",
      "Managed client communication, requirement gathering, design iterations, and deployment independently.",
      "Built responsive landing pages, booking flows, and dynamic content sections optimized for mobile and cross-browser performance.",
      "Owned end-to-end delivery with iterative scoping and on-time execution.",
    ],
  },
  {
    title: "Web Design Intern",
    company: "BrainyBeamInfo-Tech Pvt Ltd",
    location: "India",
    period: "May 2025 - Jun 2025",
    description: [
      "Contributed to full-stack features using Django and MERN stack within an Agile team environment.",
      "Participated in sprint planning, code reviews, and Git-based version control workflows.",
      "Built reusable UI components and integrated RESTful APIs.",
      "Helped reduce code duplication and improved frontend scalability and page performance.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          Professional Experience
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-10">
        {experiences.map((exp) => (
          <ScrollAnimation key={`${exp.title}-${exp.company}`}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-gray-400 text-base sm:text-lg">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                  <span>-</span>
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-3 sm:space-y-4">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                    >
                      <ArrowRight className="w-5 h-5 mt-0.5 text-gray-400 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;