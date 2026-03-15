function searchBooks(){

let input = document.getElementById("searchBar").value.toLowerCase();

let books = document.getElementsByClassName("book");

for(let i=0;i<books.length;i++){

let title = books[i].innerText.toLowerCase();

if(title.includes(input)){
books[i].style.display="block";
}

else{
books[i].style.display="none";
}

}

}