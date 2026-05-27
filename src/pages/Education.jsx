import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";

const educationData = [
  {
    institute: "DSEU Rajokri Campus",
    location: "Delhi, India",
    duration: "Expected: June 2026",
    degree: "Diploma in Artificial Intelligence and Machine Learning",
    highlights: [
      "AI and ML fundamentals",
      "Full-stack development foundations",
      "Database and system design basics",
      "Practical project implementation",
    ],
    description:
      "Focused on building strong engineering fundamentals while applying AI/ML learning to practical software development workflows.",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-5xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <ScrollAnimation key={edu.institute}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-2xl font-bold">{edu.institute}</h3>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  {edu.duration}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-300 mb-3">
                <MapPin className="w-4 h-4" />
                <span>{edu.location}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-gray-400" />
                <h4 className="text-lg font-semibold">{edu.degree}</h4>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{edu.description}</p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm flex items-center gap-2"
                  >
                    <Award className="w-3 h-3" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;