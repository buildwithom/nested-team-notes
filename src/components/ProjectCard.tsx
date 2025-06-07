
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { User } from "lucide-react";

interface Task {
  text: string;
  isChecked: boolean;
}

interface ProjectCardProps {
  title: string;
  description: string;
  collaborators: number;
  tasks: Task[];
  color: string;
  lastUpdated: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  collaborators, 
  tasks, 
  color,
  lastUpdated 
}: ProjectCardProps) => {
  const completedTasks = tasks.filter(task => task.isChecked).length;
  const completionPercentage = tasks.length > 0 ? (completedTasks / tasks.length) * 100 : 0;

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-border bg-card hover:scale-[1.02] hover:border-primary/30 shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className={`w-3 h-3 rounded-full ${color} mb-2 shadow-sm`}></div>
          <Badge variant="secondary" className="text-xs border border-border/50">
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
            <div className="w-full bg-muted rounded-full h-2 border border-border/20">
              <div 
                className="gradient-primary h-2 rounded-full transition-all duration-300 shadow-sm"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Tasks List */}
          <div className="space-y-2">
            {tasks.slice(0, 4).map((task, index) => (
              <div key={index} className="flex items-center space-x-2 p-1 rounded border border-transparent hover:border-border/30 hover:bg-accent/30 transition-colors">
                <Checkbox 
                  checked={task.isChecked}
                  className="h-4 w-4 border-2 border-border data-[state=checked]:border-primary"
                />
                <span className={`text-sm ${task.isChecked ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {task.text}
                </span>
              </div>
            ))}
            {tasks.length > 4 && (
              <p className="text-xs text-muted-foreground border-t border-border/30 pt-2">
                +{tasks.length - 4} more tasks
              </p>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground pt-2 border-t border-border/50">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{collaborators}</span>
            </div>
            <span>{completedTasks}/{tasks.length} tasks</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
