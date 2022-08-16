import sortOut, { heroArray } from "../app";

test("Сортировка героев", () => {
  expect(sortOut(heroArray)).toEqual([
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 }
  ]);
});