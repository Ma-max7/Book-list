let titleInputElem = document.getElementById("title")
let authorInputElem = document.getElementById("author")
let yearInputElem = document.getElementById("year")
let btn = document.querySelector(".btn")
let tbodyElem = document.getElementById("book-list")

let books = []

function addBook() {

    if (titleInputElem.value && authorInputElem.value && yearInputElem.value) {

        obj = {
            title: titleInputElem.value,
            author: authorInputElem.value,
            year: yearInputElem.value
        }

        titleInputElem.value = ""
        authorInputElem.value = ""
        yearInputElem.value = ""
        btn.blur()

        books.push(obj)
        setLocalStorage(books)
        addBookGenerator(books)
    } else {
        alert("invalid value")
    }
}

function addBookGenerator(booksArray) {

    tbodyElem.innerHTML = ""

    booksArray.forEach(function (newBook) {
        let newTr = document.createElement("tr")

        let nameTh = document.createElement("th")
        nameTh.innerHTML = newBook.title

        let authorTh = document.createElement("th")
        authorTh.innerHTML = newBook.author

        let yearTh = document.createElement("th")
        yearTh.innerHTML = newBook.year

        tbodyElem.append(newTr)
        newTr.append(nameTh, authorTh, yearTh)

    })
}

function setLocalStorage(addBookArray) {
    localStorage.setItem("book", JSON.stringify(addBookArray))
}
function getLocalStorage() {
    let getLocal = JSON.parse(localStorage.getItem("book"))

    if (getLocal) {
        books = getLocal
    } else {
        getLocal = []
    }

    addBookGenerator(books)
}



btn.addEventListener("click", addBook)
window.addEventListener("load", getLocalStorage)