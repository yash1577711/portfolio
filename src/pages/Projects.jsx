import { ScrollAnimation } from "@/components/ScrollAnimation";
import { FolderKanban } from "lucide-react";

const projects = [
  {
    title: "Multi-Purpose Delivery Platform",
    summary:
      "Django-based full-stack delivery platform for food, groceries, parcels, and gifting.",
    details: [
      "Implemented secure Django authentication and service-specific workflows.",
      "Built image upload with live preview and customer tracking sections.",
      "Optimized ORM queries and modularized templates for scalability and maintainability.",
    ],
    tags: ["Django", "Bootstrap", "PostgreSQL", "HTML/CSS", "ORM"],
  },
  {
    title: "Full-Stack Blogging Platform",
    summary:
      "Feature-complete blog CMS focused on clean architecture and database performance.",
    details: [
      "Built user authentication, profile management, post CRUD, rich-text content, image uploads, and comments.",
      "Applied reusable template components for a consistent interface.",
      "Used ORM indexing strategies to improve data performance under load.",
    ],
    tags: ["Django", "PostgreSQL", "HTML/CSS", "MVC", "Auth"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.title}>
            <div className="bg-gray-800/50 rounded-lg backdrop-blur-sm h-full flex flex-col p-6 border border-white/5 hover:bg-gray-800/70 transition-all">
              <div className="flex items-center gap-2 mb-3">
                <FolderKanban className="w-5 h-5 text-gray-300" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{project.summary}</p>
              <ul className="space-y-2 mb-4 flex-grow">
                {project.details.map((point) => (
                  <li key={point} className="text-gray-300 text-sm leading-relaxed">
                    - {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 text-sm bg-white/10 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;