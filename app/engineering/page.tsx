import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import EngineeringHero from "@/components/sections/engineering/EngineeringHero";
import EngineeringDomains from "@/components/sections/engineering/EngineeringDomains";
import EngineeringProcess from "@/components/sections/engineering/EngineeringProcess";
import Platforms from "@/components/sections/engineering/Platforms";
import TechnologyStack from "@/components/sections/engineering/TechnologyStack";
import OpenEngineering from "@/components/sections/engineering/OpenEngineering";
import EngineeringCTA from "@/components/sections/engineering/EngineeringCTA";

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />

      <main>
        <EngineeringHero />
        <EngineeringDomains />
        <EngineeringProcess />
        <Platforms />
        <TechnologyStack />
        <OpenEngineering />
        <EngineeringCTA />
      </main>

      <Footer />
    </div>
  );
}

