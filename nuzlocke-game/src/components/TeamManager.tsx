import React from "react";

export function TeamManager({ onNext }: { onNext: () => void }) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">🧑‍🤝‍🧑 Team Manager</h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Active Team</h3>
          <ul className="list-disc list-inside">
            <li>Charmeleon (Lvl 18)</li>
            <li>Poliwhirl (Lvl 17)</li>
            <li>Gloom (Lvl 18)</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl">
          <h3 className="font-semibold text-lg mb-2">Pokébox</h3>
          <ul className="list-disc list-inside">
            <li>Geodude (Lvl 12)</li>
            <li>Pidgeotto (Lvl 14)</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-xl">
        <h3 className="font-semibold text-lg mb-2">☠️ Fallen Pokémon</h3>
        <ul className="list-disc list-inside text-red-400">
          <li>Butterfree (RIP)</li>
        </ul>
      </div>

      <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded" onClick={onNext}>
        Proceed to Level-Up
      </button>
    </div>
  );
}
