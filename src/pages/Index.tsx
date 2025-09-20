import React, { Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import { GlobalChat } from "@/components/GlobalChat";
import { Loading3D } from "@/components/3d/Loading3D";
import { Interactive3DWorld } from "@/components/3d/Interactive3DWorld";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      
      {/* Main 3D World Background */}
      <div className="fixed inset-0 -z-20">
        <Suspense fallback={<Loading3D />}>
          <Interactive3DWorld 
            mousePosition={{ x: 0, y: 0 }} 
            showFeatures={true}
          />
        </Suspense>
      </div>
      
      {/* Content with glassmorphism backgrounds */}
      <div className="relative z-10">
        <Hero />
        
        <div className="bg-gradient-to-b from-background/80 via-background/90 to-background/80 backdrop-blur-md">
          <Features />
        </div>
        
        <div className="bg-gradient-to-b from-background/70 via-background/85 to-background/70 backdrop-blur-lg">
          <Contact />
        </div>
        
        <div className="bg-background/95 backdrop-blur-xl">
          <GlobalChat />
        </div>
      </div>
    </div>
  );
};

export default Index;
