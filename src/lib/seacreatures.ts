import Rayfish from "@/assets/svg/tappy-tiger-enemy-1.svg";
import Octopus from "@/assets/svg/tappy-tiger-enemy-2.svg";
import Seahorse from "@/assets/svg/tappy-tiger-enemy-3.svg";
import Draken from "@/assets/svg/tappy-tiger-enemy-4.svg";
import Turtle from "@/assets/svg/tappy-tiger-enemy-5.svg";
import Jellyfish from "@/assets/svg/tappy-tiger-enemy-6.svg";
import bronze from "@/assets/svg/bronze.svg?react";
import silver from "@/assets/svg/silver.svg?react";
import gold from "@/assets/svg/gold.svg?react";
import platinum from "@/assets/svg/platinum.svg?react";
import diamond from "@/assets/svg/diamond.svg?react";
import { SeaCreature } from "@/interface/SeaCreature";

export const seaCreatures: SeaCreature[] = [
  {
    name: "Rayfish",
    Medal: bronze,
    title: "Bronze",
    Fish: Rayfish,
    drops: 5000,
  },
  {
    name: "Octopus",
    Medal: silver,
    title: "Silver",
    Fish: Octopus,
    drops: 50000,
  },
  {
    name: "Seahorse",
    Fish: Seahorse,
    Medal: gold,
    title: "Gold",
    drops: 500000,
  },
  {
    name: "Draken",
    Fish: Draken,
    Medal: platinum,
    title: "Platinum",
    drops: 1000000,
  },
  {
    name: "Turtle",
    Fish: Turtle,
    Medal: diamond,
    title: "Diamond",
    drops: 100000000,
  },
  {
    name: "Jellyfish",
    Fish: Jellyfish,
    title: "Epic",
    drops: 1000000000,
  },
];

 export const levels = [
  {
    Medal: bronze,
    name: "Bronze",
    Fish: Rayfish,
  },
  {
    Medal: silver,
    name: "Silver",
    Fish: Octopus,
  },
  {
    Fish: Seahorse,
    Medal: gold,
    name: "Gold",
  },
  {
    Fish: Draken,
    Medal: platinum,
    name: "Platinum",
  },
  {
    Fish: Turtle,
    Medal: diamond,
    name: "Diamond",
  },
  {
    Fish: Jellyfish,
    name: "Epic",
  },
]
