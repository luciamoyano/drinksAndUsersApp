class UserController {
  constructor(userService, drinkService) {
    //asociar la variable de clase a lo recibido en la instancia
    this.userService = userService;
    this.drinkService = drinkService;
  }

  async getUsers(req, res) {
    try {
      const users = await this.userService.getUsers();
      res.status(200).send(users);
    } catch (error) {
      console.log(error);
      res.status(500).send("cannot get users");
    }
  }

  async getUserByName(req, res) {
    const { name } = req.params;
    try {
      const user = await this.userService.getUserByName(name);
      const drink = await this.drinkService.getDrinkByName(user.favDrink);
      const data = {
        name: user.name,
        favDrink: user.favDrink,
        main: drink.mainIngredient,
      };
      console.log(drink);
      console.log("mainingredient", drink.mainIngredient);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send("cannot get user");
    }
  }
}

module.exports = UserController;
