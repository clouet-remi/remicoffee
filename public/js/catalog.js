displayAllCatalog(); 

function displayAllCatalog() {
    const coffeesDisplayDiv = document.getElementById("articles-list")
    const displayCatalogButton = document.getElementById("see-all-products-button");

    displayCatalogButton.addEventListener("click", () => {
        coffeesDisplayDiv.classList.toggle("only-display-3-articles");
        changeDisplayCoffeesButtonMessage();
    });
}

function changeDisplayCoffeesButtonMessage() {

    let displayCoffeesButton = document.getElementById("see-all-products-button");

    displayCoffeesButton.textContent = displayCoffeesButton.textContent === "Ne pas afficher tous les produits" ? "Voir tous les produits" : "Ne pas afficher tous les produits"; 
}

