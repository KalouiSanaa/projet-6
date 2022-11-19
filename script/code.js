
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
			  let desc = item.description.substring(0,150) + '...read more';
	  
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
	contBook.classList = 'contBook'
	myBooks.insertBefore(contBook, content)
	contBook.style='display:block;display: inline-block;vertical-align: middle;'
    //icon
	const bookIcon = document.createElement('img')
	bookIcon.src = './imges/bookmark.png'
	bookIcon.style='width:50px;height:50px;position:relative;top:top:-20px;'
	bookIcon.id= 'icon'
	bookIcon.class= 'icon'

	contBook.appendChild(bookIcon);
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
	
	//IMAGE
	const bookImage = document.createElement('img')
	bookImage.class = 'image'
	bookImage.src = image
	bookImage.style='width:200px;height:200px;position:relative;'
	contBook.appendChild(bookImage)

//DESCRIPTION
	const bookDescription = document.createElement('p')
	bookDescription.innerText = 'Description : ' + description
	bookDescription.class = 'description'
	contBook.appendChild(bookDescription)


//ICON
bookIcon.addEventListener('click',save)
bookIcon.onclick=function(){save(id,bookName,author,description,image)};}
	//bookIcon.onclick = function() { save }

	

		
const containerSearchList = document.createElement('section')
containerSearchList.id = 'containerSearchList'
div.after(containerSearchList);

showPochList=function(id,bookName,author,description,image){

//CONTAINER SEARCH
	const contBookList = document.createElement('div')
	contBook.classList = 'book'
	myBooks.insertBefore(contBookList, content)
//TITLE
	const bookTitleL = document.createElement('h1')
	bookTitleL.innerText = 'Titre : ' + bookName
	bookTitle.Lclass = 'bookTitle'
	containerSearchList.append(contBookList);
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
	bookIconL.src = './imges/trash.png'
	//bookIconL.onclick = function() {deleteBook(Id)}

}

let save=function (id,bookTitle,author,description,image){
	const books = JSON.parse(sessionStorage.getItem('books'));
	if(books.getItem('books') !== null){
		if (books.some(item => item.Id === Id)) {
			alert('Vous ne pouvez pas ajouter deux fois le même livre.')
		} else {
	
			let book =  {
				Title: bookTitle,
				Id: id,
				Author: author,
				Description:description,
				Image:image
			}
				books.push(book)
				sessionStorage.setItem("books", JSON.stringify(books))
				showPochList(id,bookTitle,author,description,image);
			
		}

}}
function init() {
	if (sessionStorage.getItem("books")) {
		showPochList();
	} else {
		sessionStorage.setItem("books",  JSON.stringify(storedArray))
	}
}

init()