import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, User, ArrowRightLeft } from "lucide-react";

interface ItemCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  timeAgo: string;
  userName: string;
  image: string;
  isOffering: boolean;
  wantedItems?: string[];
}

const ItemCard = ({
  title,
  description,
  category,
  location,
  timeAgo,
  userName,
  image,
  isOffering,
  wantedItems = []
}: ItemCardProps) => {
  return (
    <Card className="group hover:shadow-nature transition-all duration-300 hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-primary/10">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge 
          className={`absolute top-2 left-2 ${
            isOffering 
              ? 'bg-gradient-nature text-primary-foreground' 
              : 'bg-gradient-warm text-foreground'
          }`}
        >
          {isOffering ? 'Offering' : 'Seeking'}
        </Badge>
        <Badge 
          variant="secondary" 
          className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm"
        >
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        
        {!isOffering && wantedItems.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-muted-foreground mb-1">Looking for:</p>
            <div className="flex flex-wrap gap-1">
              {wantedItems.slice(0, 3).map((item, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {item}
                </Badge>
              ))}
              {wantedItems.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{wantedItems.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {userName}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeAgo}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="community" className="flex-1" size="sm">
            <ArrowRightLeft className="w-4 h-4" />
            {isOffering ? 'Make Offer' : 'I Have This'}
          </Button>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemCard;