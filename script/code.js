
const var2 = document.querySelector(".h2");
const divmyBooks = document.querySelector('#myBooks');
const div = document.createElement('div');
let apikey="AIzaSyBSCkoZa48-eZeJfUz72GlTkhUIFCS6lxg";
div.setAttribute('id', 'div');
//boutton add book 
addButton=function(){
const btnAjout = document.createElement("button");
btnAjout.innerText = "Add Book";
btnAjout.id = "btn";
btnAjout.type = "submit";
btnAjout.name = "ajout livre";
btnAjout.class = "ajout";
btnAjout.value = 'click';
var2.after(btnAjout);
btnAjout.addEventListener('click', function myf () {
	if (div.style.display == 'none') {
		  div.style.display = 'flex'
		  btnAjout.style.display = 'none'
	  } 
  });}
  addButton();

  createFormElements=function(){
  //div search
  div.style.display = 'none';
  divmyBooks.insertBefore(div, content)
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
auteur.innerText = "nom de l'auteur:";
auteur.name = "auteur";
auteur.id="autor-label";
const auteurInput = document.createElement('input')
auteurInput.type = 'text';
auteurInput.name = "auteurinput";
auteurInput.id="autor";
div.append(auteur);
div.append(auteurInput);
//button search
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
let author=auteurInput.value;
searchBnt.addEventListener('click', function (event) {
	event.preventDefault();
	if (titreLivreInput.value!= 0 && auteurInput.value != 0) {
		try{
			const rs = document.createElement('h2')
		rs.className = 'rs'
		rs.innerText = 'votre recherche '
	  div.appendChild(rs)
	  
		let api = 'https://www.googleapis.com/books/v1/volumes?q='+auteurInput.value+':inauthor='+titreLivreInput.value+':&Key='+apikey;

		fetch (api)
		.then(function(res) {
			return res.json();
		  })
		  .then(function(data) {
			console.log(data.items);
			let items = data.items;
			for (let i = 0; i < items.length; i++) {
			  // Volume info
	 		  let item = items[i].volumeInfo;
			  //id
	          let id=item.id;
			  // Author
			  let author = item.authors;
	  
			  // Image link

			  let image = (item.imageLinks.thumbnail == null || item.imageLinks.thumbnail == undefined ? 'images/unavailable.png': item.imageLinks.thumbnail);
	
			  let titleBook = item.title;
	  
			  // Description
			  let desc = item.description;
	  
			  if (typeof desc === 'undefined') {
				desc = 'Information manquante';
			  }
			  //display book 
			  showBook(id,titleBook,author,desc,image);
				console.log(data);
			  }
			 }
		  )}
			
			
	
		catch{
			console.log('error');
		}
	
	}
  else{
	alert("remplissez bien les champs demander svp");
  }
})}
createFormElements();
 	//information book .
function showBook(id,bookName,author,description,image){
	//CONTAINER SEARCH
const containerSearch = document.createElement('section')
containerSearch.id = 'containersearch'
div.after(containerSearch)
	const contBook = document.createElement('div')
	contBook.classList = 'book'
	myBooks.insertBefore(contBook, content)
//TITLE
	const bookTitle = document.createElement('h1')
	bookTitle.innerText = 'Titre : ' + bookName
	bookTitle.class = 'bookTitle'
	contBook.appendChild(bookTitle)

//AUTHOR
	const bookAuthor = document.createElement('h3')
	bookAuthor.innerText = 'Auteur : ' + author
	bookAuthor.class = 'author'
	contBook.appendChild(bookAuthor)
//ID
	const bookId = document.createElement('h3')
	bookId.innerText = 'Id : ' + id
	bookId.class = 'id'
	contBook.appendChild(bookId)

//DESCRIPTION
	const bookDescription = document.createElement('p')
	bookDescription.innerText = 'Description : ' + description
	bookDescription.class = 'description'
	contBook.appendChild(bookDescription)

//IMAGE
	const bookImage = document.createElement('img')
	bookImage.class = 'image'
	bookImage.src = image
	contBook.appendChild(bookImage)

//ICON
	const bookIcon = document.createElement('img')
	bookIcon.src = './imges/bookmark.png'
	bookIcon.id= 'icon'
	bookIcon.class= 'icon'
	contBook.appendChild(bookIcon)


		bookIcon.addEventListener('click', function() {
			let book =  {
				Title: bookTitle,
				Id: bookId,
				Author:bookAuthor,
				Description: bookDescription,
				Image:bookImage
			}
			try{
				let storage = JSON.parse(localStorage.getItem('myBooks'));
	
				let index = storage.findIndex(item => (book.Id == bookId));

				if (index != -1) {
					alert('Un livre ne pas peut pas être ajouté 2 fois');
				} else {
					
					currentLocalStorage.push(book);
                  showPochList(bookId,bookTitle,bookAuthor,bookDescription,bookImage);
				}
				localStorage.setItem('myBooks', JSON.stringify(storage));
			
		}
	
		catch{
			console.log('error');
		}
	
	
		})}
	
showPochList=function(id,title,autor,description,image){
//CONTAINER SEARCH
const containerSearchList = document.createElement('section')
containerSearchList.id = 'containerSearchList'
div.after(containerSearchList)
	const contBookList = document.createElement('div')
	contBook.classList = 'book'
	myBooks.insertBefore(contBookList, content)
//TITLE
	const bookTitleL = document.createElement('h1')
	bookTitleL.innerText = 'Titre : ' + bookName
	bookTitle.Lclass = 'bookTitle'
	contBookList.appendChild(bookTitleL)

//AUTHOR
	const bookAuthorL = document.createElement('h3')
	bookAuthorL.innerText = 'Auteur : ' + author
	bookAuthorL.class = 'author'
	contBookList.appendChild(bookAuthorL)
//ID
	const bookIdL = document.createElement('h3')
	bookIdL.innerText = 'Id : ' + id
	bookIdL.class = 'id'
	contBookList.appendChild(bookIdL)

//DESCRIPTION
	const bookDescriptionL = document.createElement('p')
	bookDescriptionL.innerText = 'Description : ' + description
	bookDescriptionL.class = 'description'
	contBookList.appendChild(bookDescriptionL)

//IMAGE
	const bookImageL = document.createElement('img')
	bookImageL.class = 'image'
	bookImageL.src = image
	contBookList.appendChild(bookImageL)

//ICON
	const bookIconL = document.createElement('img')
	bookIconL.src = './imges/bookmark.png'
	bookIconL.id= 'icon'
	bookIconL.class= 'icon'
	contBookList.appendChild(bookIconL)
	bookIconL.src = './images/trash.png'
	//bookIconL.onclick = function() {deleteBook(Id)}





}




