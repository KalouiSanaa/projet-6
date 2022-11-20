const var2 = document.querySelector(".h2");
const divmyBooks = document.querySelector('#myBooks');
const div = document.createElement('div');
let apikey="AIzaSyBSCkoZa48-AIzaSyAj9RsOKQTCeT4ivbbzCdcYT41lMiApfhM";
const books =[];
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

searchBnt.addEventListener('click', function (event) {
	event.preventDefault();
	if (titreLivreInput.value!= 0 && auteurInput.value != 0) {
		try{
			const rs = document.createElement('h2')
		rs.className = 'rs'
		rs.innerText = 'votre recherche '
	  div.appendChild(rs)
	  let titleBook = titreLivreInput.value;
      let author=auteurInput.value;
	   fetch (`https://www.googleapis.com/books/v1/volumes?q=${titleBook}+inauthor:${author}`)
	   .then(res => res.json())
	   .then(res =>{
			if (res.totalItems == 0) {
			alert('aucun resultat')
		}		
		  else {
			let items= res.items;
			for (let i = 0; i < items.length; i++) {
			  // Volume info
	 		  let item = items[i].volumeInfo;
			  //id
			  if(item!==undefined && item!==null){
	          let id=item.id;
			  // Author
			  let author = item.authors;
	  
			  // Image link

			  let image = (items[i].volumeInfo?.imageLinks?.thumbnail == null || items[i].volumeInfo?.imageLinks?.thumbnail == undefined ? 'imges/unavailable.png':items[i].volumeInfo?.imageLinks?.thumbnail)
	
			  let titleBook = item.title;
	  
			  // Description
			  let desc = item.description.substring(0,150) + '...read more';
	  
			  if (typeof desc === 'undefined') {
				desc = 'Information manquante';
			  }
			  //display book 
			  showBook(id,titleBook,author,desc,image);}}}
})}
catch (error){
	console.error("Erreur :" + error);}}
		 else {
			alert("Veuillez renseigner tous les champs")}})}
			
 	//information book .
createFormElements();
function showBook(id,title,author,description,image){
	//CONTAINER SEARCH
const containerSearch = document.createElement('section')
containerSearch.id = 'containersearch'
div.after(containerSearch)
	const contBook = document.createElement('div')
	contBook.classList = 'contBook'
	divmyBooks.insertBefore(contBook, content)
	contBook.style='display:block;display: inline-block;vertical-align: middle;'
    //icon
	const icon = document.createElement('img')
	icon.src = './imges/bookmark.png'
	icon.style='width:50px;height:50px;position:relative;top:top:-20px;'
	icon.id= 'icon'
	icon.class= 'icon'

	contBook.appendChild(icon);
//TITLE
	const bookTitle = document.createElement('h1')
	bookTitle.innerText = 'Titre : ' + title
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
	//contBook.appendChild(bookId)
	
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
icon.addEventListener('click',save)
icon.onclick=function(){save(id,title,author,description,image)};}
const containerSearchList = document.createElement('section')
containerSearchList.id = 'containerSearchList'
div.after(containerSearchList);
showPochList=function(){
//document.getElementById('containerSearchList').innerHTML="";
const books = JSON.parse(sessionStorage.getItem('books'));
for(i=0;i<books.length;i++){
	let book ={
		id:books[i].id,
		title:books[i].title,
		author:books[i].author,
		 description:books[i].description, 
         image:books.image[i]};
	
showPochListHtml(id,title,author,description,image);}}

showPochListHtml=function (id,title,author,description,image){
//CONTAINER SEARCH
	const contBookList = document.createElement('div')
	contBookList.classList = 'book'
	content.after(contBookList)
//TITLE
	const bookTitleL = document.createElement('h1')
	bookTitleL.innerText = 'Titre : ' + title
	bookTitleL.class = 'bookTitle'
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
	const iconL = document.createElement('img')
	iconL.src = './imges/bookmark.png'
	iconL.id= 'icon'
	iconL.class= 'icon'
	iconL.src = './imges/trash.png'
	contBookList.appendChild(iconL)
}
//initialization
function getBooks(){
	if(sessionStorage.getItem('books')){
		showPochList();
	}else{
		sessionStorage.setItem("books",  JSON.stringify(books));
	}

}



let save=function (id,title,author,description,image){
	let books= JSON.parse(sessionStorage.getItem("books"));
		
		if (books.some(e=> e.id ===id)){
			alert('Vous ne pouvez pas ajouter deux fois le même livre.')
		} else {
			let book={
            id:id,
            title:title,
            author:author,
            description:description,
           image:image}
	       books.push(book);
		   console.log(books);
		   sessionStorage.setItem("books", JSON.stringify(books));
		   showPochList();}
			}
		

getBooks();
function removeBook(id){
	let books= JSON.parse(sessionStorage.getItem("books"));
	getBooks();
	let book={
		id:id,
		title:title,
		author:author,
		description:description,
	   image:image}
	books.forEach((book, index) => {
		if (book.id === id) {
			books.splice(index, 1);
		}
	});}

	localStorage.setItem('books', JSON.stringify(books));
  