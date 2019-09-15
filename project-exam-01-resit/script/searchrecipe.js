const url = 'https://api.edamam.com/search?q=healthy&app_id=$18f5ca8e&app_key=$e313f2f98ae77c07cc6c83d7e229a156';

//-- fetch the API and display error messages (if there are any)
fetch(url) 
.then(function(data) { 
})
.catch(function(error) {
});

//-- get the response from the API in json

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
console.log(data.label)
})

//-- create recipes 

function createRecipes(data){
    document.getElementsId('recipes').innerHTML += "<div><h1>" + data.hits[0].recipe.url + "</h1></div>";
}