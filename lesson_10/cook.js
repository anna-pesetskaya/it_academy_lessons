class Vegetable {
    constructor(name, caloriesPer100g, color, weight) {
        this.name = name;
        this.caloriesPer100g = caloriesPer100g;
        this.color = color;
        this.weight = weight;
    }
    
    getName() {
        return this.name;
    }
      
    // Метод для получения калорийности в зависимости от веса
    getCalories() {
        return (this.weight * this.caloriesPer100g)/100;
    }
}


module.exports = { Vegetable }