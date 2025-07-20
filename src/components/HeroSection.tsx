import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Users, Recycle } from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-earth">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Trade, Share, and 
                <span className="bg-gradient-nature bg-clip-text text-transparent"> Build Community</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Join thousands of neighbors exchanging goods and services. 
                Turn what you don't need into exactly what you want, while building 
                a more sustainable future together.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="default" size="lg" className="group">
                Start Trading
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Browse Items
              </Button>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-3 pt-6">
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-3 text-center">
                  <Leaf className="w-6 h-6 text-nature-green mx-auto mb-2" />
                  <p className="text-xs font-medium">Eco-Friendly</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-3 text-center">
                  <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs font-medium">Community First</p>
                </CardContent>
              </Card>
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-3 text-center">
                  <Recycle className="w-6 h-6 text-nature-orange mx-auto mb-2" />
                  <p className="text-xs font-medium">Zero Waste</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-nature">
              <img 
                src={heroCommunity} 
                alt="Community trading marketplace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-soft animate-float">
              <p className="text-2xl font-bold text-primary">2,847</p>
              <p className="text-sm text-muted-foreground">Active Traders</p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-soft animate-float" style={{ animationDelay: '1s' }}>
              <p className="text-2xl font-bold text-nature-orange">1,234</p>
              <p className="text-sm text-muted-foreground">Successful Trades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;