import Navbar from "@/components/Navbar";
import Team from "@/components/Team";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <Team />
      </div>
    </div>
  );
};

export default TeamPage;