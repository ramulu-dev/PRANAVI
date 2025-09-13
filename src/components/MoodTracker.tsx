import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const moodEmojis = [
  { emoji: "😢", label: "Very Sad", value: 1, color: "text-blue-500" },
  { emoji: "😔", label: "Sad", value: 2, color: "text-blue-400" },
  { emoji: "😐", label: "Neutral", value: 3, color: "text-gray-500" },
  { emoji: "😊", label: "Happy", value: 4, color: "text-wellness-green" },
  { emoji: "😁", label: "Very Happy", value: 5, color: "text-wellness-orange" },
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [todayLogged, setTodayLogged] = useState(false);
  const { toast } = useToast();

  const handleMoodSelect = (moodValue: number) => {
    setSelectedMood(moodValue);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      // Store mood in localStorage for demo
      const today = new Date().toISOString().split('T')[0];
      const existingMoods = JSON.parse(localStorage.getItem('dailyMoods') || '{}');
      existingMoods[today] = selectedMood;
      localStorage.setItem('dailyMoods', JSON.stringify(existingMoods));
      
      setTodayLogged(true);
      toast({
        title: "Mood logged successfully! 🎉",
        description: "Your daily check-in has been recorded.",
      });
    }
  };

  if (todayLogged) {
    return (
      <Card className="bg-gradient-card shadow-card border-0">
        <CardContent className="p-6 text-center">
          <div className="mb-4">
            <span className="text-6xl animate-mood-bounce">✅</span>
          </div>
          <h3 className="text-xl font-semibold text-wellness-green mb-2">
            Today's mood logged!
          </h3>
          <p className="text-muted-foreground">
            Come back tomorrow for your next check-in.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-wellness bg-clip-text text-transparent">
          How are you feeling today?
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex justify-center gap-4 mb-6">
          {moodEmojis.map((mood) => (
            <button
              key={mood.value}
              onClick={() => handleMoodSelect(mood.value)}
              className={`
                text-5xl p-4 rounded-2xl transition-all duration-300 transform hover:scale-110
                ${selectedMood === mood.value 
                  ? 'bg-primary/10 shadow-glow scale-110' 
                  : 'hover:bg-secondary/50'
                }
              `}
            >
              {mood.emoji}
            </button>
          ))}
        </div>
        
        {selectedMood && (
          <div className="text-center animate-fade-in">
            <p className="text-lg font-medium mb-4">
              You're feeling: {moodEmojis[selectedMood - 1].label}
            </p>
            <Button 
              onClick={handleSubmit}
              variant="wellness"
              size="lg"
              className="w-full"
            >
              Log Today's Mood
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};