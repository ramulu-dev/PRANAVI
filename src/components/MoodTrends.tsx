import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Calendar } from "lucide-react";

const moodColors = {
  1: "bg-blue-500",
  2: "bg-blue-400", 
  3: "bg-gray-400",
  4: "bg-wellness-green",
  5: "bg-wellness-orange",
};

const moodLabels = {
  1: "Very Sad",
  2: "Sad",
  3: "Neutral", 
  4: "Happy",
  5: "Very Happy",
};

export const MoodTrends = () => {
  const [moodData, setMoodData] = useState<Record<string, number>>({});

  useEffect(() => {
    const storedMoods = JSON.parse(localStorage.getItem('dailyMoods') || '{}');
    setMoodData(storedMoods);
  }, []);

  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - i);
    return date.toISOString().split('T')[0];
  }).reverse();

  const averageMood = Object.values(moodData).length > 0 
    ? Object.values(moodData).reduce((sum, mood) => sum + mood, 0) / Object.values(moodData).length
    : 0;

  return (
    <Card className="bg-gradient-card shadow-card border-0">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <TrendingUp className="h-6 w-6 text-primary" />
          Your Mood Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        {Object.keys(moodData).length === 0 ? (
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              Start logging your daily moods to see trends and patterns.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Weekly Overview */}
            <div>
              <h3 className="font-semibold mb-4">Last 7 Days</h3>
              <div className="flex gap-2 justify-between">
                {last7Days.map((date) => {
                  const mood = moodData[date];
                  const dayName = new Date(date).toLocaleDateString('en', { weekday: 'short' });
                  
                  return (
                    <div key={date} className="flex flex-col items-center gap-2">
                      <div className="text-xs text-muted-foreground">{dayName}</div>
                      <div 
                        className={`
                          w-8 h-8 rounded-full border-2 border-white shadow-sm
                          ${mood ? moodColors[mood as keyof typeof moodColors] : 'bg-gray-200'}
                        `}
                        title={mood ? moodLabels[mood as keyof typeof moodLabels] : 'No data'}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Average Mood */}
            <div className="bg-white/50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">Average Mood</h4>
                  <p className="text-sm text-muted-foreground">Based on {Object.keys(moodData).length} entries</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {averageMood.toFixed(1)}/5
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {averageMood >= 4 ? "Great!" : averageMood >= 3 ? "Good" : "Needs attention"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};