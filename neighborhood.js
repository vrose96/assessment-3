function getRandomRestaurant() {
    const restaurants = [
        "Blue Fish",
        "Zupas",
        "Zoas",
        "Chick Fil La",
    ];
    const randomIndex = Math.floor(Math.random() * restaurants.length);

    const randomRestaurant = restaurants[randomIndex];
    alert("You should try: " + randomRestaurant);
}
document.getElementById("randomRestaurantButton").addEventListener("click", getRandomRestaurant);