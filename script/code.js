//variables
const var2 = document.querySelector(".h2");
const divmyBooks = document.querySelector('#myBooks');
const div = document.createElement('div');
const footer=document.getElementsByClassName('footer')
let apikey="AIzaSyBSCkoZa48-AIzaSyAj9RsOKQTCeT4ivbbzCdcYT41lMiApfhM";
const resultListe="Vous ne pouvez ajouter 2 fois le même livre ...";
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
  //form elements
  function createForm(){
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
	          let id=item.id;
			  // Author
			  let author = item.authors;
	  
			  // Image link
			  if (items[i].volumeInfo?.imageLinks?.thumbnail === undefined ||items[i].volumeInfo?.imageLinks?.thumbnail === null) {
                image = "imges/unavailable.png "
				
        } else {
                image = items[i].volumeInfo?.imageLinks?.thumbnail;
        };
	        //title
			  let titleBook = item.title;
			  
	          
			  // Description
			  let desc = item.description;
	  
			  if (typeof desc === 'undefined' || typeof desc===null) {
				desc = 'Information manquante';
			  }
             else{
			  desc = item.description.substring(0,200) + '...read more';}
			  //display book 
			  showBook(id,titleBook,author,desc,image);}}}
)}
catch (error){
	console.error("Erreur :" + error);}}
		 else {
			alert("Veuillez renseigner tous les champs")}})
		 }
		 createForm();
 	
	//disply book  
function showBook(id,title,author,description,image){
	//CONTAINER SEARCH

	const contBook = document.createElement('section')
	contBook.classList = 'contBook'
	divmyBooks.insertBefore(contBook, content)
	contBook.style='display:table-cell;vertical-align:text-bottom;position: relative;'
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
	const containerSearchList = document.createElement('section')
	containerSearchList.id = 'containerSearchList'
	content.after(containerSearchList);
icon.addEventListener('click',function(event){
event.preventDefault();
		const rs = document.createElement('h2')
	rs.className = 'vp'
	rs.style='color :#ff7675;'
//	rs.innerText = 'vos livres préférées :'
  //div.appendChild(rs)
saveBook(id,title,author,description,image)})}
const containerSearch = document.createElement('section')
containerSearch.id = 'containersearch'
content.after(containerSearch);


//display list book function

function showPochList(id,title,author,description,image){
    
 const contBookList = document.createElement('div')
   contBookList.classList = 'book'
   contBookList.style='display:table-cell;vertical-align:text-bottom;position: relative;';
   contBookList.after(content)
   div.after(contBookList)
//icon trash
const iconL= document.createElement('img')
iconL.src = './imges/trash.png'
iconL.class='iconL'
iconL.id='idIcon'
contBookList.appendChild(iconL)

//title
iconL.style='width:50px;height:50px;position:relative;top:top:-20px;'
   const bookTitleL = document.createElement('h1')
   bookTitleL.innerText = 'Titre : ' + title
   bookTitleL.class = 'bookTitleL'
   containerSearch.append(contBookList);
   contBookList.appendChild(bookTitleL)

//AUTHOR
   const bookAuthorL = document.createElement('h3')
   bookAuthorL.innerText = 'Auteur : ' +author
   bookAuthorL.class = 'authorL'
   contBookList.appendChild(bookAuthorL)
//ID
   const bookIdL = document.createElement('h3')
   bookIdL.innerText = 'Id : ' + id
   bookIdL.class = 'idL'
   bookIdL.id='id'

//DESCRIPTION
   const bookDescriptionL = document.createElement('p')
   bookDescriptionL.innerText = 'Description : ' +description
   bookDescriptionL.class = 'descriptionL'
   contBookList.appendChild(bookDescriptionL)

//IMAGE
   const bookImageL = document.createElement('img')
   bookImageL.class = 'imageL'
   bookImageL.src = image
   contBookList.appendChild(bookImageL)
   //delete book  
   iconL.addEventListener('click',function(event){
	event.preventDefault();
	let books= JSON.parse(sessionStorage.getItem("book"))
	if (books.some(e=>e.title===title)) {
	let books = JSON.parse(sessionStorage.getItem('book'));
    books = books.filter((e) => e.title !==title);
    sessionStorage.setItem('book', JSON.stringify(books));
  listPochBook();}
})}

	//list search book
function listPochBook(){
document.getElementById ('containersearch').innerHTML=''
let books= this.JSON.parse(sessionStorage.getItem('book'))
for (let i = 0; i < books.length; i++) {
	let book=books[i];
let id=book.id
let title=book.title
let author=book.author;
let description=book.description
let image=book.image

showPochList(id,title,author,description,image)
sessionStorage.setItem('book',JSON.stringify(books));

}}	
//add book
function saveBook(id,title,author,description,image){
	let books =JSON.parse(sessionStorage.getItem('book'))
	if (books.some(liv => liv.title ===title)) {
		alert(resultListe);
	}
	else {
		JSON.parse(sessionStorage.getItem('book'))

		let book={
			id:id,
			author:author,
			title:title,
			description:description,
			image: image
		}
		if(book.title!=undefined){
		books.push(book);
		sessionStorage.setItem('book',JSON.stringify(books));
		alert("Le livre '"+ book.title+ "' de " + book.author + " a été ajouté dans votre Poch'Liste");
		listPochBook();
	
	}}}
	//initialisation
	if (sessionStorage.getItem("book")) {
		listPochBook()
	} else {
		sessionStorage.setItem("book",  JSON.stringify(books))
	}