const Drink = require("../models/drinkModel");

class DrinkService {
  //obtenemos la drink por el nombre de esta
  getDrinkByName(name) {
    const query = Drink.findOne({ name: name }).exec();
    return query;
  }
}

module.exports = DrinkService;
