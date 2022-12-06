/**
 * Mikolaj postanowil przygotować w tym roku potrawy swiateczne samodzielnie.
 * Dostał od mamy listę przepisów, dzieki którym stworzy pyszne, tradycyjne potrawy!
 * Ale najpierw musi pójść na zakupy. Pomoż Mikołajowi i wygeneruj listę zakupów z listy przepisów.
 * Dla ułatwienia załóż, że wszystkie produkty są w tych samych jednostkach, wiec po prostu podlicz ilości.
 * P.S. Nie polecam używać tych przepisów, zostały one maksymalnie uproszone do celu zadania. :D
 */

const recipt: { [key: string]: { [key: string]: number } }[] = [
  {
    murzynek: {
      Maka: 300,
      Cukier: 100,
      Jajka: 3,
      Czekolada: 200,
      Maslo: 200,
    },
    piernik: {
      Maka: 300,
      Cukier: 100,
      Jajka: 3,
      Czekolada: 200,
      Maslo: 200,
    },
    sernik: {
      Maka: 300,
      Cukier: 100,
      Jajka: 3,
      Czekolada: 200,
      Maslo: 200,
    },
    uszka: {
      Maka: 300,
      Cukier: 100,
      Jajka: 3,
      Czekolada: 200,
      Maslo: 200,
    },
    barszcz: {
      Maka: 900,
      Cukier: 500,
      Jajka: 1,
      Czekolada: 100,
      Maslo: 500,
    },
    pierogi: {
      Maka: 3000,
      Cukier: 300,
      Jajka: 33,
      Czekolada: 2200,
      Maslo: 20,
    },
  },
];

const ingredientTotals: { [key: string]: number } = {};
recipt.map((recipe) => {
  Object.keys(recipe).forEach((recipeName) => {
    const ingredients = recipe[recipeName];
    Object.keys(ingredients).forEach((ingredient) => {
      if (ingredientTotals.hasOwnProperty(ingredient)) {
        ingredientTotals[ingredient] += ingredients[ingredient];
      } else {
        ingredientTotals[ingredient] = ingredients[ingredient];
      }
    });
  });
});

for (const ingredient in ingredientTotals) {
  console.log(`${ingredient}: ${ingredientTotals[ingredient]}`);
}
