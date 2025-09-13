import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Sunrise, Utensils, Music, BookOpen } from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "5-Minute Breathing Exercise",
    description: "Practice deep breathing to reduce stress and improve focus.",
    icon: Sunrise,
    category: "Mindfulness",
    duration: "5 min",
    color: "bg-wellness-blue/10 text-wellness-blue",
  },
  {
    id: 2,
    title: "Take a Nature Walk",
    description: "Spend time outdoors to boost mood and energy levels.",
    icon: Heart,
    category: "Physical",
    duration: "15 min",
    color: "bg-wellness-green/10 text-wellness-green",
  },
  {
    id: 3,
    title: "Gratitude Journaling",
    description: "Write down three things you're grateful for today.",
    icon: BookOpen,
    category: "Reflection",
    duration: "10 min",
    color: "bg-wellness-purple/10 text-wellness-purple",
  },
  {
    id: 4,
    title: "Listen to Calming Music",
    description: "Enjoy your favorite relaxing playlist to unwind.",
    icon: Music,
    category: "Relaxation",
    duration: "20 min",
    color: "bg-wellness-orange/10 text-wellness-orange",
  },
];

export const WellnessRecommendations = () => {
  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Brain className="h-6 w-6 text-primary" />
          Personalized Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {recommendations.map((rec, index) => {
            const IconComponent = rec.icon;
            return (
              <div
                key={rec.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-3 rounded-xl ${rec.color}`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{rec.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {rec.duration}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {rec.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      Try Now
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};