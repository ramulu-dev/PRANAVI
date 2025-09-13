import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, TrendingUp, Calendar } from "lucide-react";

export const WellnessHero = () => {
  return (
    <div className="relative bg-gradient-wellness min-h-[400px] rounded-3xl overflow-hidden shadow-wellness mb-8">
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center text-white h-full">
        <div className="animate-fade-in">
          <Heart className="h-16 w-16 mb-6 mx-auto opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Your Wellness Journey
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl">
            Track your daily mood, discover patterns, and receive personalized recommendations for better mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="wellness" size="lg" className="group">
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Start Today's Check-in
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <TrendingUp className="mr-2 h-5 w-5" />
              View Your Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};