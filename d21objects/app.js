"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {findTitles, findAuthors, findIDs,addBook, showTitles, showAuthors, showIDS }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showTitles() {
    /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */
    const titles = findTitles();
    /*need to sort and then join the titles still (e.g., someArray.join("\n")  */
    titles.sort();

    const titleString = titles.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;

}

/**
 * Event handler to display library authors sorted alphabetically
 * @returns {undefined}
 */
 function showAuthors() {
    const authors = findAuthors();
    authors.sort();
    const authorString = authors.join("\n");;
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorString;
}

/**
 * Event handler to display library IDs sorted alphabetically
 * @returns {undefined}
 */
 function showIDS() {
    const libraryIDs = findIDs();
    libraryIDs.sort();
    const libraryIDString = libraryIDs.join("\n");
    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = libraryIDString;
}

/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
    for(const book of library){
        titles.push(book.title);
    }
    // implement this and other functions
    
    return titles.sort();
}

/**
 * 
 * @returns {object} sorted array of authors as elements
 */
function findAuthors() {
    let authors = [];
    for(const book of library){
        authors.push(book.author);
    }
 
    return authors.sort();
}

/**
 * 
 * @returns {object} sorted array of libraryIDs as elements
 */
function findIDs() {
    let libraryIDs = [];
    for(const book of library){
        libraryIDs.push(book.libraryID);
    }

    return libraryIDs.sort();
}

/**
 * @returns {object} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(){
    const title = document.getElementById("title"); //retrieves the book title from the title textbox
    // finish the implementation -- get the author, create a book object, and add to the library array
    const author = document.getElementById("author");
    const libraryID = document.getElementById("libraryID");

    const book = {
        title: title,
        author: author,
        libraryID: libraryID,
    };

    library.push(book);
    return book; 
}