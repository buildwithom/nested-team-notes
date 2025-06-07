
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";

const DashboardSection = () => {
  // Sample project data
  const projects = [
    {
      title: "Website Redesign",
      description: "Complete overhaul of the company website with modern design and improved UX.",
      collaborators: 4,
      tasksCompleted: 12,
      totalTasks: 20,
      pages: 8,
      color: "bg-blue-500",
      lastUpdated: "2 hours ago"
    },
    {
      title: "Mobile App MVP",
      description: "First version of our mobile application with core features and user authentication.",
      collaborators: 6,
      tasksCompleted: 25,
      totalTasks: 35,
      pages: 15,
      color: "bg-purple-500",
      lastUpdated: "1 day ago"
    },
    {
      title: "Marketing Campaign",
      description: "Q4 marketing strategy and campaign execution across multiple channels.",
      collaborators: 3,
      tasksCompleted: 8,
      totalTasks: 12,
      pages: 6,
      color: "bg-green-500",
      lastUpdated: "3 hours ago"
    },
    {
      title: "Documentation Hub",
      description: "Comprehensive documentation for all our products and internal processes.",
      collaborators: 2,
      tasksCompleted: 5,
      totalTasks: 15,
      pages: 12,
      color: "bg-orange-500",
      lastUpdated: "5 hours ago"
    }
  ];

  const topTasks = [
    { text: "Finalize homepage wireframes", project: "Website Redesign", urgent: true },
    { text: "Set up authentication flow", project: "Mobile App MVP", urgent: false },
    { text: "Review brand guidelines", project: "Marketing Campaign", urgent: true },
    { text: "Write API documentation", project: "Documentation Hub", urgent: false },
    { text: "Conduct user testing", project: "Website Redesign", urgent: false }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        {/* Projects Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Your Projects</h2>
              <p className="text-muted-foreground">Manage and collaborate on your active projects</p>
            </div>
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

        {/* Top Tasks Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Top Priority Tasks</h3>
              <Button variant="ghost" className="text-primary">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {topTasks.map((task, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-card rounded-lg border hover:shadow-md transition-shadow"
                >
                  <input 
                    type="checkbox" 
                    className="rounded border-border text-primary focus:ring-primary/20" 
                  />
                  <div className="flex-1">
                    <p className="font-medium">{task.text}</p>
                    <p className="text-sm text-muted-foreground">{task.project}</p>
                  </div>
                  {task.urgent && (
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Quick Stats</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border">
                <div className="text-3xl font-bold text-blue-600 mb-1">4</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border">
                <div className="text-3xl font-bold text-green-600 mb-1">50</div>
                <div className="text-sm text-muted-foreground">Tasks Completed</div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border">
                <div className="text-3xl font-bold text-purple-600 mb-1">15</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border">
                <div className="text-3xl font-bold text-orange-600 mb-1">41</div>
                <div className="text-sm text-muted-foreground">Pages Created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
