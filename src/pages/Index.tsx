import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CommunityStats from "@/components/CommunityStats";
import CategoryFilter from "@/components/CategoryFilter";
import ItemCard from "@/components/ItemCard";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Grid, List } from "lucide-react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock data for items
  const mockItems = [
    {
      id: '1',
      title: 'Vintage Guitar',
      description: 'Beautiful acoustic guitar in excellent condition. Perfect for beginners or experienced players.',
      category: 'Musical Instruments',
      location: 'Downtown',
      timeAgo: '2 hours ago',
      userName: 'Sarah M.',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=400&h=300&fit=crop',
      isOffering: true
    },
    {
      id: '2',
      title: 'Looking for Bike Repair',
      description: 'Need someone to help fix my mountain bike. Willing to trade homemade bread or garden vegetables.',
      category: 'Services',
      location: 'Northside',
      timeAgo: '4 hours ago',
      userName: 'Mike L.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop',
      isOffering: false,
      wantedItems: ['Bike Tools', 'Repair Service', 'Bicycle Parts']
    },
    {
      id: '3',
      title: 'Organic Garden Vegetables',
      description: 'Fresh tomatoes, cucumbers, and herbs from my organic garden. Ready for harvest!',
      category: 'Food & Garden',
      location: 'Westside',
      timeAgo: '6 hours ago',
      userName: 'Emma K.',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=400&h=300&fit=crop',
      isOffering: true
    },
    {
      id: '4',
      title: 'Coding Lessons Available',
      description: 'Experienced software developer offering coding lessons. Looking for home-cooked meals or art supplies.',
      category: 'Services',
      location: 'Tech District',
      timeAgo: '1 day ago',
      userName: 'Alex R.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
      isOffering: true
    },
    {
      id: '5',
      title: 'Vintage Books Collection',
      description: 'Classic literature collection including first editions. Well-maintained and loved.',
      category: 'Books',
      location: 'University Area',
      timeAgo: '1 day ago',
      userName: 'David W.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      isOffering: true
    },
    {
      id: '6',
      title: 'Need Baby Clothes',
      description: 'Looking for gently used baby clothes (6-12 months). Can offer photography services in return.',
      category: 'Clothing',
      location: 'Family District',
      timeAgo: '2 days ago',
      userName: 'Lisa P.',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop',
      isOffering: false,
      wantedItems: ['Baby Clothes', 'Baby Accessories', 'Toys']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? mockItems 
    : mockItems.filter(item => item.category.toLowerCase().includes(selectedCategory));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="container mx-auto px-4 py-8">
          <CommunityStats />
          
          <CategoryFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          {/* Items Section */}
          <div className="space-y-6">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {selectedCategory === 'all' ? 'Recent Listings' : `${selectedCategory} Items`}
                </h2>
                <p className="text-muted-foreground">
                  {filteredItems.length} items available for trade
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </Button>
                <div className="flex border border-border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Items Grid */}
            <div className={`${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
                : 'space-y-4'
            }`}>
              {filteredItems.map((item) => (
                <div key={item.id} className="animate-fade-in">
                  <ItemCard {...item} />
                </div>
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg">
                Load More Items
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-primary/5 border-t border-primary/10 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Join the Vish Community
            </h3>
            <p className="text-muted-foreground mb-4">
              Start trading today and help build a more sustainable future
            </p>
            <Button variant="nature" size="lg">
              Get Started
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
