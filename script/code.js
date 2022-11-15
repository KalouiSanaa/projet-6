
const var2 = document.getElementsByClassName('h2')[0];
const divmyBooks = document.getElementById('myBooks');
const div = document.createElement('div');
div.setAttribute('id', 'div');
div.style.display = 'none';




const myf = function () {
  if (div.style.display == 'none') {
		div.style.display = 'flex'
		btnAjout.style.display = 'none'
	} 
}
divmyBooks.insertBefore(div, content)


//boutton add book 
const btnAjout = document.createElement("button");
btnAjout.innerText = "Add Book";
btnAjout.id = "btn";
btnAjout.type = "submit";
btnAjout.name = "ajout livre";
btnAjout.class = "ajout";
btnAjout.value = 'click';
var2.after(btnAjout);
btnAjout.addEventListener('click', myf);
//title book label  
const titrelivre = document.createElement('label');
titrelivre.innerText = 'Titre du livre:';
titrelivre.name = 'titre';
titrelivre.id="label-book"
const titreLivreInput = document.createElement('input');
titreLivreInput.type = 'text';
titreLivreInput.name = "titre";
titreLivreInput.id="livre";
div.append(titrelivre);
div.append(titreLivreInput);

// author label  
const auteur = document.createElement('label');
auteur.innerText = 'nom de l Auteur:';
auteur.name = "auteur";
auteur.id="autor-label";
const auteurInput = document.createElement('input')
auteurInput.type = 'text';
auteurInput.name = "auteurinput";
auteurInput.id="autor";
div.append(auteur);
div.append(auteurInput);

//button chearch
const searchBnt = document.createElement('button');
searchBnt.innerText = 'Rechercher';
searchBnt.value = 'click';
searchBnt.id = 'btn_search';
div.append(searchBnt);

// boutton annuler
const cancelBnt = document.createElement('button')
cancelBnt.innerText = 'Annuler';
cancelBnt.id = 'btn_cancel';
cancelBnt.value = "click";
div.append(cancelBnt);
cancelBnt.addEventListener('click', cancel=function()  {window.location = "../P6/index.html"})
//create varibale api 
let titleBook = titreLivreInput.value

searchBnt.addEventListener('click', function (event) {
	event.preventDefault();
	if (titreLivreInput.value!= 0 && auteurInput.value != 0) {
		try{
			const rs = document.createElement('h2')
		rs.className = 'rs'
		rs.innerText = 'votre recherche >>'
		div.appendChild(rs)
		fetch ('https://www.googleapis.com/books/v1/volumes?q=${titleBook}+inauthor:${author}')
		.then(function (response){
		return response.json()})
	    
		
		.then(function(json){
			let items=json.items;
			if (items.totalItems == 0) {

				alert("Aucun livre n a été trouvé")}

				else{
					for(let i =0;i<items.length;i++){
						let item=items[i].volumeInfo;
						let author =item.authors;
						let bookName = item.title;
					let id = item.id;
					let etag=item.etag
					
					let description = (item.description == undefined ? 'Information manquante':item.description)
					let image = (item.imageLinks.thumbnail== null || item.imageLinks?.thumbnail == undefined ? 'images/unavailable.png': item.imageLinks?.thumbnail); 
					showBook(id,bookName,author,description,image);



				}
			}
			})
	}
		catch{
			console.log('error');
		}
  
	}
  else{
	alert("remplissez bien les champs demander svp");
  }
})
 	//information book .
showBook=function(id,bookName,author,description,image){
const containerSearch = document.createElement('div')
containerSearch.id = 'containersearch'
div.after(containerSearch)
	const containerBook = document.createElement('div')
	const bookTitle = document.createElement('h1')
	const bookAuthor = document.createElement('h3')
	const bookId = document.createElement('h3')
	const bookDescription = document.createElement('p')
	const bookImage = document.createElement('img')
	const bookIcon = document.createElement('img')
	bookTitle.innerText = 'Titre : ' + bookName
	bookId.innerText = 'Id : ' + id
	bookAuthor.innerText = 'Auteur : ' + author
	bookDescription.innerText = 'Description : ' + description
	bookTitle.classList = 'bookTitle'
	bookId.classList = 'id'
	bookAuthor.classList = 'author'
	bookDescription.classList = 'description'
	bookImage.classList = 'image'
	bookImage.src = image
	bookIcon.src = './imges/bookmark.png'
	bookIcon.width = 30
	bookIcon.height = 30
	bookIcon.id= 'icon'
	bookIcon.classList= 'icon'

	containerBook.appendChild(bookIcon)
	containerBook.appendChild(bookTitle)
	containerBook.appendChild(bookAuthor)
	containerBook.appendChild(bookId)
	containerBook.appendChild(bookDescription)
	containerBook.appendChild(bookImage)
	containerBook.classList = 'book'
	myBooks.insertBefore(containerBook, content)




}