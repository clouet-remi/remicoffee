import { client } from "../db/db-client.js";

// Pour tester une req random vers la bdd 
export async function findAllCoffees() {
    const result = await client.query(`
        SELECT *,
        "coffee"."name" AS "coffee_name", 
        "country"."name" AS "country_name"
        FROM "coffee"
        JOIN "country"
        ON "country"."id" = "coffee"."country_id"
        ORDER BY RANDOM()
        `);
    const coffees = result.rows; 
    return coffees; 
}

export async function findThreeCoffees() {
    const result = await client.query(`SELECT * FROM "coffee" ORDER BY RANDOM() LIMIT 3`);
    const promos = result.rows; 
    return promos; 
}

export async function findCoffeeByName(name) {
    const result = await client.query(`
        SELECT *,
        "coffee"."name" AS "coffee_name", 
        "country"."name" AS "country_name" 
        FROM "coffee" 
        JOIN "country"
        ON "country"."id" = "coffee"."country_id" 
        WHERE INITCAP("coffee"."name") = $1
        `,
    [name]);
    const coffee = result.rows[0]; 
    return coffee
}

export async function findCharacteristicsByCoffee(coffeeId) {
    const result = await client.query(`
        SELECT 
        "characteristic"."name"
        FROM "characteristic" 
        JOIN "coffee_characteristic" 
        ON "coffee_characteristic"."characteristic_id" = "characteristic"."id"
        JOIN "coffee"
        ON "coffee"."id" = "coffee_characteristic"."coffee_id"
        WHERE "coffee"."id" = $1
        `, [coffeeId]
    )
    const characteristics = result.rows;
    return characteristics
}

export async function findAllCoffeesCharacteristics() {
    const result = await client.query(`
        SELECT
        "coffee"."id" AS "coffee_id", 
        "characteristic"."name" AS "characteristic_name"
        FROM "coffee"
        JOIN "country"
        ON "country"."id" = "coffee"."country_id"
        JOIN "coffee_characteristic" 
        ON "coffee_characteristic"."coffee_id" = "coffee"."id"
        JOIN "characteristic"
        ON "characteristic"."id" = "coffee_characteristic"."characteristic_id"
        `);
    const coffees = result.rows; 
    return coffees; 
}