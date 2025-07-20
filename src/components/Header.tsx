import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, User, Heart, MessageCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-nature rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-foreground animate-float" />
            </div>
            <h1 className="text-xl font-bold text-primary">Vish</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for items or services..."
              className="pl-10 bg-secondary/50 border-primary/20 focus:border-primary/40"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button variant="nature" size="sm">
              <Plus className="w-4 h-4" />
              List Item
            </Button>
            <Button variant="ghost" size="icon">
              <MessageCircle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;