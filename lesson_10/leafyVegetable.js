const { Vegetable } = require('./cook')

class LeafyVegetable extends Vegetable {
    constructor(name, caloriesPer100g, color, weight, vitaminC, type) {
        super(name, caloriesPer100g, color, weight);
        this.vitaminC = vitaminC;
        this.type = type;
    }

    getVitaminC(weight) {
        return weight  *  this.vitaminC;
    }
}

module.exports = { LeafyVegetable }
