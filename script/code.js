const var2 = document.getElementsByClassName('h2')[0]
const divmyBooks = document.getElementById('myBooks')

// Create div hidden by default
const div = document.createElement('div')
div.id = "div";

const myf = function () {
    alert("ajout nouveau livre");
}
//boutton add book 
const btnAjout = document.createElement("button");
btnAjout.innerText = "Add Book";
btnAjout.id = "btn";
btnAjout.type = "submit";
btnAjout.name = "ajout livre";
btnAjout.class = "ajout";
btnAjout.value = 'click';
var2.after(btnAjout);
btnAjout.setAttribute("style", "color:#2d3436; padding:10px;background-color:#0984e3;border:4px;margin: 2%;margin-left: auto;margin-right: auto;text-align:center;justify-content: center;display: flex");
btnAjout.addEventListener('click', myf, false);

const titrelivre = document.createElement('label');
titrelivre.innerText = 'Titre du livre';
titrelivre.name = 'titre';
const titreLivreInput = document.createElement('input');
titreLivreInput.type = 'text';
titreLivreInput.name = "titre";
//div.appendChild(titrelivre);
//div.appendChild(titreLivreInput);

// author 
const auteur = document.createElement('label');
auteur.innerText = 'Auteur';
auteur.name = "auteur";
const auteurInput = document.createElement('input')
auteurInput.type = 'text';
auteurInput.name = "auteurinput";
//div.appendChild(auteur);
//div.appendChild(auteurInput);

//button recherche
const searchBnt = document.createElement('button');
searchBnt.innerText = 'Rechercher';
searchBnt.value = 'click';
searchBnt.id = 'btn_search';
//searchBnt.appendChild(searchBnt);

// boutton annuler
const cancelBnt = document.createElement('button')
cancelBnt.innerText = 'Annuler';
cancelBnt.id = 'btn_cancel';
cancelBnt.value = "click";
//cancelBnt.appendChild(cancelBnt);


//fetch("https://www.googleapis.com/auth/books")
  //  .then(function (response) {
    //    return Response.json();
    //})
    //.then(function (data) { console.log(data) })
    let title = titreLivreInput.value
		let author = auteurInput.value
   async function get(){
const response=await fetch("https://www.googleapis.com/books/v1/volumes?q=search+terms");
const data=await response.json();
console.log(data[0].name);
    }
get()
document.querySelector("content").innerHTML=data[0].auteur;
