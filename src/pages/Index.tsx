import { WellnessHero } from "@/components/WellnessHero";
import { MoodTracker } from "@/components/MoodTracker";
import { MoodTrends } from "@/components/MoodTrends";
import { WellnessRecommendations } from "@/components/WellnessRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <WellnessHero />
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Daily Mood Check-in */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <MoodTracker />
          </div>
          
          {/* Mood Trends */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <MoodTrends />
          </div>
        </div>
        
        {/* Wellness Recommendations */}
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <WellnessRecommendations />
        </div>
      </div>
    </div>
  );
};

export default Index;
