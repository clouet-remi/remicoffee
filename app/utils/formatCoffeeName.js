export function formatCoffeeName(coffeeName) {

let coffeeNameToSearch = ""; 

    const coffeeNameToChange = coffeeName.split("-");

    for (const coffeeNamePart of coffeeNameToChange) {
        coffeeNameToSearch = coffeeNameToSearch + " " +  coffeeNamePart.charAt(0).toUpperCase() + coffeeNamePart.slice(1); 
    }

    coffeeNameToSearch = coffeeNameToSearch.trim()
    return coffeeNameToSearch; 
}