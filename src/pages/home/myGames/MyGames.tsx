import { GamesTable } from "./GamesTable";

const testData = [
  {
    name: "Dead of Winter",
    description: "Fight zombies and survive the winter",
    minPlayers: 2,
    maxPlayer: 5,
  },
  {
    name: "Pandemic",
    description: "THE PLAGUE",
    minPlayers: 2,
    maxPlayer: 4,
  },
];

export const MyGamesList = () => {
  return (
    <div>
      My Games
      <GamesTable data={testData} />
    </div>
  );
};
