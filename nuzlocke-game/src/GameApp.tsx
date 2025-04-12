// Core Layout
import { useState } from "react";
import { RouteFlow } from "./components/RouteFlow";
import { TeamManager } from "./components/TeamManager";
import { LevelUp } from "./components/LevelUp";
import { BattleSimulator } from "./components/BattleSimulator";
import { MemoryJournal } from "./components/MemoryJournal";
import { RunMap } from "./components/RunMap";

// src/GameApp.tsx
export default function GameApp() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold">Nuzlocke Roguelike</h1>
      <p>This is the start of your adventure!</p>
    </div>
  );
}


  const renderView = () => {
    switch (currentView) {
      case "route": return <RouteFlow onNext={() => setCurrentView("team")}/>;
      case "team": return <TeamManager onNext={() => setCurrentView("level")}/>;
      case "level": return <LevelUp onNext={() => setCurrentView("battle")}/>;
      case "battle": return <BattleSimulator onNext={() => setCurrentView("journal")}/>;
      case "journal": return <MemoryJournal onNext={() => setCurrentView("map")}/>;
      case "map": return <RunMap onNext={() => setCurrentView("route")}/>;
      default: return null;
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <header className="text-xl font-bold mb-4">Nuzlocke Roguelike</header>
      {renderView()}
    </div>
  );
}
