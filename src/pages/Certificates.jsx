import { motion } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const certificates = [
  {
    title: "Python Advanced Certification",
    issuer: "Microsoft",
    date: "Completed",
    description:
      "Advanced Python concepts and practical development fundamentals.",
    skills: ["Python", "Problem Solving", "Programming"],
  },
  {
    title: "Generative AI Certification",
    issuer: "Learning Unlimited",
    date: "Completed",
    description:
      "Foundational understanding of generative AI applications and workflows.",
    skills: ["Generative AI", "AI Concepts", "Practical Use Cases"],
  },
  {
    title: "Foundation Course on IR4.0 Technologies",
    issuer: "Microsoft / Edunet",
    date: "Completed",
    description:
      "Industry-relevant concepts aligned with Industry 4.0 technologies.",
    skills: ["IR4.0", "Emerging Tech", "Digital Systems"],
  },
  {
    title: "Hackathon Winner - 1st Place",
    issuer: "DSEU '26",
    date: "Achievement",
    description:
      "Won first place through rapid prototyping and problem-solving under time constraints.",
    skills: ["Rapid Prototyping", "Teamwork", "Execution"],
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Award className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Certificates and Achievements</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <ScrollAnimation key={cert.title}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <div className="text-gray-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg">{cert.issuer}</span>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                </div>
                <p className="text-gray-300">{cert.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-sm bg-white/10 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;