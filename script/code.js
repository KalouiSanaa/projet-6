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
	          let id=item.id;
			  // Author
			  let author = item.authors;
	  
			  // Image link
			  if (items[i].volumeInfo?.imageLinks?.thumbnail === undefined ||items[i].volumeInfo?.imageLinks?.thumbnail === null) {
                image = "imges/unavailable.png";
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
			  desc = item.description.substring(0,150) + '...read more';}
			  //display book 
			  showBook(id,titleBook,author,desc,image);}}}
)}
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
content.after(containerSearchList);


showPochListHtml=function(id,title,author,description,image){
	
	
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
//icon trash
	const iconL= document.createElement('img')
	iconL.src = './imges/trash.png'
    iconL.class='iconL'
	iconL.id='idIcon'
	contBookList.appendChild(iconL)

}

showPochList=function(){
	document.getElementById ('containerSearchList').innerHTML=''
	let books= JSON.parse(sessionStorage.getItem('livres'))
	for(i=0;i<books.length;i++){
		let title = books[i].title
		let id = books[i].id
		let author = books[i].author
		let description = books[i].description
		let image = books[i].image
		showPochListHtml(id,title,author,description,image)
	}}
let save=function (id,title,author,description,image){
	let books= JSON.parse(sessionStorage.getItem('livres'))
	let livre={
		id:id,
		title:title,
		author:author,
		description:description,
		image:image
	}
	const found = books.find(e => e.id==livre.id);
	if (found && livre){
		alert("Vous ne pouvez ajouter 2 fois le même livre");
	}
	else {
		
		if(livre.title!=undefined){
		
		books.push(livre)
		console.log(livre)
		sessionStorage.setItem("livres", JSON.stringify(books))
        showPochList();
	}
}}

//initialisation
	if(sessionStorage.getItem('livres')){
		showPochList();
}
else{

	sessionStorage.setItem("livres",  JSON.stringify(books))
	}


