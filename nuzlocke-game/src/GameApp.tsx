import { useState } from "react";
import { RouteFlow } from "./components/RouteFlow";
import { TeamManager } from "./components/TeamManager"; // ✅ import

export default function GameApp() {
  const [currentView, setCurrentView] = useState<"route" | "team">("route");

  const renderView = () => {
    if (currentView === "route") return <RouteFlow onNext={() => setCurrentView("team")} />;
    if (currentView === "team") return <TeamManager onNext={() => console.log("LevelUp coming next!")} />;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Nuzlocke Roguelike</h1>
      {renderView()}
    </div>
  );
}
