import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Book, Shirt, Home, Utensils, Car, Heart, Briefcase, Gamepad2 } from "lucide-react";

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Items', icon: Heart, count: 247 },
  { id: 'books', name: 'Books', icon: Book, count: 45 },
  { id: 'clothing', name: 'Clothing', icon: Shirt, count: 38 },
  { id: 'home', name: 'Home & Garden', icon: Home, count: 62 },
  { id: 'kitchen', name: 'Kitchen', icon: Utensils, count: 29 },
  { id: 'electronics', name: 'Electronics', icon: Gamepad2, count: 34 },
  { id: 'automotive', name: 'Automotive', icon: Car, count: 18 },
  { id: 'services', name: 'Services', icon: Briefcase, count: 21 }
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-primary/10 p-4 mb-6">
      <h3 className="font-semibold text-foreground mb-3">Browse by Category</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          const isSelected = selectedCategory === category.id;
          
          return (
            <Button
              key={category.id}
              variant={isSelected ? "default" : "outline"}
              className={`flex flex-col items-center gap-2 h-auto p-3 ${
                isSelected 
                  ? 'bg-gradient-nature shadow-soft' 
                  : 'hover:bg-primary/5 hover:border-primary/30'
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <Icon className="w-5 h-5" />
              <div className="text-center">
                <div className="text-xs font-medium">{category.name}</div>
                <Badge 
                  variant="secondary" 
                  className={`text-xs mt-1 ${
                    isSelected ? 'bg-background/20' : 'bg-primary/10'
                  }`}
                >
                  {category.count}
                </Badge>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;