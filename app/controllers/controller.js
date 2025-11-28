import { findAllCoffees, findThreeCoffees, findCoffeeByName, findCharacteristicsByCoffee, findAllCoffeesCharacteristics } from "../datamappers/datamapper.js"
import { formatCoffeeName } from "../utils/formatCoffeeName.js";

export async function homePage(req, res) {

    const foundCoffees = await findThreeCoffees();

    if (!foundCoffees) {
        return res.status(404).render("404.ejs")
    };

    res.render("home.ejs", { coffees: foundCoffees })
}

export async function catalogPage(req, res) {

    const foundCoffees = await findAllCoffees();

    if (!foundCoffees) {
        return res.status(404).render("404.ejs")
    };

    const foundCharacteristics = await findAllCoffeesCharacteristics();

    if (!foundCharacteristics) {
        return res.status(404).render("404.ejs");
    };

    // Pour stocker les charactérisitiques de chaque café
    const characteristicsByCoffee = {};

    for (const characteristic of foundCharacteristics) {
        if (!characteristicsByCoffee[characteristic.coffee_id]) {
            characteristicsByCoffee[characteristic.coffee_id] = [];
        }
        characteristicsByCoffee[characteristic.coffee_id].push(" " + characteristic.characteristic_name);
    };

    res.render("catalog.ejs", { coffees: foundCoffees, characteristics: characteristicsByCoffee, pageTitle: "Notre Catalogue" })
}

export async function coffeeDetailPage(req, res) {

    let coffeeName = formatCoffeeName(req.params.coffeeName);

    const foundCoffee = await findCoffeeByName(coffeeName);
    
    if (!foundCoffee) {
        return res.status(404).render("404.ejs")
    }

    const coffeeCharacteristics = await findCharacteristicsByCoffee(foundCoffee.id)

    res.render("coffee-detail.ejs", { coffee: foundCoffee, characteristics: coffeeCharacteristics, pageTitle: `Notre café - ${foundCoffee.coffee_name}` })
}

export function shopPage(req, res) {
    res.render("shop.ejs")
}