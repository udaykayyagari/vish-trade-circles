import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Recycle, ArrowRightLeft, TreePine, TrendingUp } from "lucide-react";

const CommunityStats = () => {
  const stats = [
    {
      icon: Users,
      label: "Active Members",
      value: "2,847",
      trend: "+12% this month",
      color: "text-primary"
    },
    {
      icon: ArrowRightLeft,
      label: "Successful Trades",
      value: "1,234",
      trend: "+8% this week",
      color: "text-nature-orange"
    },
    {
      icon: Recycle,
      label: "Items Rescued",
      value: "5,692",
      trend: "From landfills",
      color: "text-nature-green"
    },
    {
      icon: TreePine,
      label: "CO₂ Saved",
      value: "12.4 tons",
      trend: "Environmental impact",
      color: "text-primary-glow"
    }
  ];

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Building Sustainable Communities</h2>
        <p className="text-muted-foreground">Join thousands making a difference through sharing</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="bg-gradient-earth border-primary/10 hover:shadow-soft transition-all duration-300 hover:scale-105">
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <Badge variant="secondary" className="text-xs bg-background/30">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CommunityStats;