
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, CheckSquare, FileText } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  collaborators: number;
  tasksCompleted: number;
  totalTasks: number;
  pages: number;
  color: string;
  lastUpdated: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  collaborators, 
  tasksCompleted, 
  totalTasks, 
  pages, 
  color,
  lastUpdated 
}: ProjectCardProps) => {
  const completionPercentage = totalTasks > 0 ? (tasksCompleted / totalTasks) * 100 : 0;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-gradient-to-br from-white to-gray-50/50 hover:scale-[1.02]">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className={`w-3 h-3 rounded-full ${color} mb-2`}></div>
          <Badge variant="secondary" className="text-xs">
            {lastUpdated}
          </Badge>
        </div>
        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{Math.round(completionPercentage)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="gradient-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{collaborators}</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckSquare className="h-4 w-4" />
              <span>{tasksCompleted}/{totalTasks}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FileText className="h-4 w-4" />
              <span>{pages}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
