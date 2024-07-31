const { RootVegetable } = require('./rootVegetable')
const { LeafyVegetable } = require('./leafyVegetable')
const { Vegetable } = require('./cook')


class Salad {
    constructor() {
      this.ingredients = [];
    }
  
    // Добавление овоща в салат
    addIngredient(vegetable) {
      this.ingredients.push(vegetable);
    }
   
    // Получение общей калорийности салата
    getTotalCalories() {
      let totalCalories = 0;
      this.ingredients.forEach(vegetable => {
        totalCalories += vegetable.getCalories(vegetable);
      });
      return totalCalories;
    }
  
    // Сортировка овощей в салате по заданному параметру
    sortIngredients(parameter) {
      this.ingredients.sort((a, b) => {
        if (parameter === 'caloriesPer100g') {
          return a.caloriesPer100g - b.caloriesPer100g;
        } else if (parameter === 'vitaminC') {
          return a.vitaminC - b.vitaminC;
        } else if (parameter === 'name') {
          return a.name.localeCompare(b.name);
        }
      });
    }
  
    // Поиск овощей в салате, соответствующих заданному диапазону параметров
    findIngredientsByRange(parameter, min, max) {
      return this.ingredients.filter(vegetable => {
        if (parameter === 'caloriesPer100g') {
          return vegetable.caloriesPer100g >= min && vegetable.caloriesPer100g <= max;
        } else if (parameter === 'vitaminC') {
          return vegetable.vitaminC >= min && vegetable.vitaminC <= max;
        }
      });
    }
  }

const carrot = new RootVegetable('морковь', 41, 'оранжевый', 150, 'конусовидная', 'средний');
const lettuce = new LeafyVegetable('салат', 15, 'зеленый', 65, 20, 'листовой');
const tomato = new Vegetable('помидор', 18, 'красный', 240);
const cucumber = new Vegetable('огурец', 15, 'зеленый', 78);

// Создание салата
const mySalad = new Salad();
mySalad.addIngredient(carrot);
mySalad.addIngredient(lettuce);
mySalad.addIngredient(tomato);
mySalad.addIngredient(cucumber);

// Вывод общей калорийности салата
console.log(`Калорийность салата: ${mySalad.getTotalCalories()}`);

// Сортировка овощей по весу
mySalad.sortIngredients('weight');
console.log(`Овощи в салате по возрастанию веса:`);
mySalad.ingredients.forEach(vegetable => {
  console.log(`${vegetable.name} (${vegetable.weight} г)`);
});

// Поиск овощей с калорийностью от 15 до 30
const foundVegetables = mySalad.findIngredientsByRange('caloriesPer100g', 15, 30);
console.log(`Овощи в салате с калорийностью от 15 до 30:`);
foundVegetables.forEach(vegetable => {
  console.log(vegetable.name);
});