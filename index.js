
'use strict'



let titleBox = document.querySelector('#title');
let authorBox = document.querySelector('#author');
let numberBox = document.querySelector('#n_pages');
let isReadCheck = document.querySelector('#read');
let nRead = document.querySelector('#n_read');
let nUnRead = document.querySelector('#n_unread')
let submit = document.querySelector('#record');
let Library = document.querySelector('.Library');





let myLibrary = {
    books : [],
    readNumber : 0,
    unreadNumber : 0
};


let showNumbers = function()
{
    nRead.innerText = myLibrary.readNumber;
    nUnRead.innerText = myLibrary.unreadNumber;
}

function Book(title,author,numberOfPages,isRead) 
{
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.isRead = isRead;
  return this;
}

function addBookToLibrary() 
{
    let title = titleBox.value;    
    let author = authorBox.value;
    let number = numberBox.value;
    let isRead = isReadCheck.checked;

    let book = new Book(title,author,number,isRead);
    myLibrary.books.push(book);

    if(isRead)
        myLibrary.readNumber++;
    else
        myLibrary.unreadNumber++;

    showBook(book);
    showNumbers();
}

let showBook = function(book)
{
    let tableRow = document.createElement('tr');
    for(let key of Object.keys(book))
    {
        let tableElement = document.createElement('td');
        tableElement.innerText = book[key];
        tableRow.appendChild(tableElement);
    }
    Library.appendChild(tableRow);
}

showNumbers();
submit.addEventListener('click' , addBookToLibrary)
