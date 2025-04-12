import { useState } from "react";

export function RouteFlow({ onNext }: { onNext: () => void }) {
  const [stage, setStage] = useState<"preview" | "encounter" | "trainers" | "town">("preview");

  const handleNext = () => {
    if (stage === "preview") setStage("encounter");
    else if (stage === "encounter") setStage("trainers");
    else if (stage === "trainers") setStage("town");
    else onNext();
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">📍 Current Route</h2>
      <div className="p-4 rounded-xl bg-gray-800">
        {stage === "preview" && <p>🔍 Preview: Route type is Grass/Poison. Next Gym: Fire (2 routes away)</p>}
        {stage === "encounter" && <p>🌿 Wild Encounter: You encountered a Bellsprout!</p>}
        {stage === "trainers" && <p>🧑‍🎓 Trainer Gauntlet: 3 battles ahead!</p>}
        {stage === "town" && <p>🏙️ Welcome to the town! Heal, shop, and prepare for next route.</p>}
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded" onClick={handleNext}>
        {stage === "town" ? "Go to PokéCenter" : "Next"}
      </button>
    </div>
  );
}
