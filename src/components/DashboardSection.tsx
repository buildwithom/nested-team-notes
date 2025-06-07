
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const DashboardSection = () => {
  // Sample project data with tasks visible on cards
  const projects = [
    {
      title: "Website Redesign",
      description: "Complete overhaul of the company website with modern design and improved UX.",
      collaborators: 4,
      tasks: [
        { text: "Finalize homepage wireframes", isChecked: true },
        { text: "Design color palette", isChecked: true },
        { text: "Create component library", isChecked: false },
        { text: "Build responsive layouts", isChecked: false },
        { text: "User testing sessions", isChecked: false }
      ],
      color: "bg-blue-500",
      lastUpdated: "2 hours ago"
    },
    {
      title: "Mobile App MVP",
      description: "First version of our mobile application with core features and user authentication.",
      collaborators: 6,
      tasks: [
        { text: "Set up authentication flow", isChecked: true },
        { text: "Design main navigation", isChecked: true },
        { text: "Implement user profiles", isChecked: false },
        { text: "Add push notifications", isChecked: false },
        { text: "App store submission", isChecked: false }
      ],
      color: "bg-purple-500",
      lastUpdated: "1 day ago"
    },
    {
      title: "Marketing Campaign",
      description: "Q4 marketing strategy and campaign execution across multiple channels.",
      collaborators: 3,
      tasks: [
        { text: "Review brand guidelines", isChecked: true },
        { text: "Create social media content", isChecked: false },
        { text: "Launch email campaigns", isChecked: false },
        { text: "Track performance metrics", isChecked: false }
      ],
      color: "bg-green-500",
      lastUpdated: "3 hours ago"
    },
    {
      title: "Documentation Hub",
      description: "Comprehensive documentation for all our products and internal processes.",
      collaborators: 2,
      tasks: [
        { text: "Write API documentation", isChecked: true },
        { text: "Create user guides", isChecked: false },
        { text: "Record tutorial videos", isChecked: false },
        { text: "Setup knowledge base", isChecked: false }
      ],
      color: "bg-orange-500",
      lastUpdated: "5 hours ago"
    }
  ];

  return (
    <section className="py-8 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Projects</h1>
          <Button className="gradient-primary text-white">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
