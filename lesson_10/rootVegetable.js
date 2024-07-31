const { Vegetable } = require('./cook')

class RootVegetable extends Vegetable {
    constructor(name, caloriesPer100g, color, weight, shape, size) {
        super(name, caloriesPer100g, color, weight);
        this.shape = shape;
        this.size = size;
    }
}

module.exports = { RootVegetable }