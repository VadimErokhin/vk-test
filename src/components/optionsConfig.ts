import { SelectOption, Tower } from "../types";

export const towerOptions: Array<SelectOption<Tower>> = [
  {
    label: "Башня-A",
    value: "A",
  },

  {
    label: "Башня-B",
    value: "B",
  },
];

export const floorOptions: Array<SelectOption<number>> = Array.from(
  Array(25),
  (_x, index) => ({
    label: `Этаж ${index + 3}`,
    value: index + 3,
  })
);

export const roomOptions: Array<SelectOption<number>> = Array.from(
  Array(10),
  (_x, index) => ({
    label: `Переговорная № ${index + 1}`,
    value: index + 1,
  })
);
