
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

function renderCocktails (cocktailData){
    cocktailData.forEach( (cocktail) => {
        console.log(cocktail.drinks[i].strDrink);
    })
}

