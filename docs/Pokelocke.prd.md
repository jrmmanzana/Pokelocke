# 📄 Product Requirements Document (PRD)

## 🎮 Project Title:
**Pokémon-Inspired Strategic Nuzlocke Roguelike Web Game**

---

## 🧱 Core Concept

A web-based roguelike game that captures the strategic and emotional essence of hardcore Pokémon Nuzlocke challenges—removing the overworld, grinding, and filler, and focusing entirely on smart encounters, team-building, and high-stakes battles.

---

## 🔁 Game Loop

1. Player selects a **starter bundle** (e.g. Tactical, Power, Utility).
2. They traverse through **~50 routes**, each with:
   - **1 wild encounter**
   - **2–4 trainer battles**
3. After each route, they enter a **town** for healing, leveling, and shopping.
4. After certain routes, they face **randomized Gym Leaders**.
5. Eventually, they reach the **Elite Four + Champion**, drafting a final team from their box.

---

## ⚔️ Key Gameplay Mechanics

### Hardcore Nuzlocke Rules
- Faint = permanent death.
- Only one catch per route.
- No items during battle.
- Level cap per badge.

### No Overworld
- Linear progression via a **node-based route map UI**.
- All encounters and events are menu-driven.

### Manual Level-Up System
- No EXP.
- Pokémon level up in PokéCenters via a manual "Level Up" or “Level to Cap” interface.

### Move Relearner System
- Replace any move with one the Pokémon could have learned up to the current cap.

### Route Previews
- After each route, preview the:
  - **Next route’s theme** (e.g. Grass, Psychic, Ghost/Dark).
  - **Upcoming Gym’s type**.
  - **How many routes until the Gym**.

### Town Structure
- PokéCenter (Heal, PC, Level-Up, Move Relearn)
- PokéMart with randomized or themed stock

### City Structure
- Includes PokéMalls with:
  - Evolution stones
  - TMs
  - Rare held items

### Elite Four Draft System
- Player sees Elite Four types before the final challenge.
- Drafts 6 Pokémon from their full box (no changes after).

### Player Memory Journal
- Tracks:
  - Route previews
  - Gym forecasts
  - PC contents by type
  - PokéMart inventory
  - Fallen Pokémon
  - Team notes

---

## 🧲 Future Expansion Features

### Optional Difficulty Toggles
- Field effects per route (e.g., sun, fog)
- Team swap limits (e.g., only 2 Pokémon allowed on a route)

### Multiplayer Modes
- **Co-op Mode**:
  - 2 players bring 3 Pokémon each
  - All battles are double battles (each player controls 1 Pokémon per turn)

- **Draft Mode**:
  - 2–X players
  - Draft from a shared randomized Pokémon pool
  - Start with a full box; no wild encounters

### Other Post-Core Features
- Post-run summaries and recaps
- Custom trainer portraits
- Daily/weekly seeded runs
- Challenge runs with special modifiers

---

## 📊 Technical Stack (Proposed)

| Component   | Tool/Framework           |
|-------------|--------------------------|
| Frontend    | React + Tailwind         |
| Backend     | Node.js / FastAPI        |
| Database    | Supabase or Firebase     |
| Multiplayer | WebSocket or Firebase RTDB |
| Hosting     | Vercel / Netlify (frontend) + Railway / Supabase (backend) |

