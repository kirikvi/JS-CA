const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";
const container = document.querySelector(".container");

async function fetchDrinks() {
    try{    
        const response = await fetch(url);
        const drinksResult = await response.json();
        const drinks = drinksResult.drinks;
    
        console.log(drinks);

        container.innerHTML = "";

        for(let i = 0; i < drinks.length; i++){

           if(i === 20){
                break;
            }

            container.innerHTML += `<a href="details.html?id=${drinks[i].idDrink}" class="item-container">
                                    <img class="thumbnail" src="${drinks[i].strDrinkThumb}" alt="The cocktail ${drinks[i].strDrink}"></img>
                                    <p style="color: #9D9B92">Drink ID: ${drinks[i].idDrink}</p>
                                    <h2>${drinks[i].strDrink}</h2>
                                    </a>`;
        }
    }
    catch(error) {
        console.log(error);
        container.innerHTML = `<h2>Mistakes were made</h2>`;
    }
    finally {
        console.log("finally");
    }
}  
fetchDrinks();


//API-document: https://www.thecocktaildb.com/api.php?ref=apilist.fun