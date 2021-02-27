const detailContainer = document.querySelector(".detail-container");
const title = document.querySelector("title");
const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const id = parameters.get("id");

console.log(id);

const drinkUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

async function fetchDrink(){
    try {
        const fetchUrl = await fetch(drinkUrl);
        const drinkArray = await fetchUrl.json();
        const drink = drinkArray.drinks[0];
        console.log(drink);

        title.innerHTML = drink.strDrink;

        const ingredient3 = drink.strMeasure3 + drink.strIngredient3
        const ingredient4 = drink.strMeasure4 + drink.strIngredient4
        const ingredient5 = drink.strMeasure5 + drink.strIngredient5

        let ing3Value = "-";

        if(ingredient3){
            ing3Value = ingredient3;
        }

        let ing4Value = "-";

        if(ingredient4){
            ing4Value = ingredient4;
        }

        let ing5Value = "-";

        if(ingredient5){
            ing5Value = ingredient5;
        }


        detailContainer.innerHTML = `<h1>${drink.strDrink}</h1>
                                <img class="thumbnail" src="${drink.strDrinkThumb}" alt="${drink.strDrink}"</div>
                                <h2>Ingredients</h2>
                                <ul>
                                    <li>${drink.strMeasure1} ${drink.strIngredient1}</li>
                                    <li>${drink.strMeasure2} ${drink.strIngredient2}</li>
                                    <li>${ing3Value}</li>
                                    <li>${ing4Value}</li>
                                    <li>${ing5Value}</li>
                                </ul> 
                                <h3>Instructions:</h3> 
                                <p>${drink.strInstructions}</p>
                                <p>This drink is a ${drink.strCategory}. Serve it in a ${drink.strGlass}.</p>
                                </a>`;
    }
    catch(error) {
        console.log(error);
        detailContainer.innerHTML = `<h2>Oops.. Something went wrong!</h2>`;
    }
    finally {
        console.log("finally");
    }
}
fetchDrink(); 

//API-document: https://www.thecocktaildb.com/api.php?ref=apilist.fun