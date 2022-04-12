
function getRandomCocktail (){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Status Code: ' +
                        response.status);
                    return;
                }
                response.json()
                    .then(function(cocktailData) {
                console.log(cocktailData)
                renderCocktails(cocktailData)
            });

})
}

getRandomCocktail();

function renderCocktails (cocktail){
console.log(cocktail);
console.log(cocktail.drinks[0]);
console.log(cocktail.drinks.length);
let drinkSection = document.getElementById('allCocktails');
    let drinkName = document.createElement('li');
    let img
    for(i = 0; i < cocktail.drinks.length; i++) {
        console.log(cocktail.drinks[i].strDrink);
        drinkName.textContent = cocktail.drinks[i].strDrink;
    $('#allCocktails').append(`<h1>Name: ${cocktail.drinks[i].strDrink}</h1> <br>  
<h3> Id: ${cocktail.drinks[i].idDrink} </h3> <br> <img class="img" src =${cocktail.drinks[i].strDrinkThumb}><br>
`)    }

}



