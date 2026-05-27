import {
  Code2,
  Server,
  Database,
  Brain,
  Wrench,
  ShieldCheck,
  Globe,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  PythonLogo,
  GitLogo,
  VSCodeLogo,
  WindowsLogo,
  UbuntuLogo,
  LinuxLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "Python", icon: <PythonLogo /> },
      { name: "JavaScript (ES6+)", icon: <JavaScriptLogo /> },
      { name: "C", icon: <Code2 className="w-4 h-4" /> },
      { name: "R", icon: <Brain className="w-4 h-4" /> },
      { name: "HTML5", icon: <Globe className="w-4 h-4" /> },
      { name: "CSS3", icon: <Globe className="w-4 h-4" /> },
    ],
  },
  {
    category: "Frameworks and Tools",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Django", icon: <Server className="w-4 h-4" /> },
      { name: "Bootstrap", icon: <Globe className="w-4 h-4" /> },
      { name: "Webflow", icon: <Globe className="w-4 h-4" /> },
      { name: "REST APIs", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Linux CLI", icon: <Wrench className="w-4 h-4" /> },
    ],
  },
  {
    category: "Databases and Operating Systems",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "SQLite", icon: <Database className="w-4 h-4" /> },
      { name: "Windows", icon: <WindowsLogo className="w-4 h-4" /> },
      { name: "Ubuntu", icon: <UbuntuLogo className="w-4 h-4" /> },
      { name: "Linux", icon: <LinuxLogo className="w-4 h-4" /> },
    ],
  },
  {
    category: "Core Concepts",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Full-Stack Development", icon: <Code2 className="w-4 h-4" /> },
      { name: "ORM", icon: <Database className="w-4 h-4" /> },
      { name: "Auth Systems", icon: <ShieldCheck className="w-4 h-4" /> },
      { name: "Responsive Design", icon: <Globe className="w-4 h-4" /> },
      { name: "MVC Architecture", icon: <Server className="w-4 h-4" /> },
      { name: "ML Fundamentals", icon: <Brain className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Resume-based overview of my backend, full-stack, tooling, and system
          fundamentals.
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;