class books{
    constructor(name,author,price,edition){
        this.name = name;
        this.author = author;
        this.price = price;
        this.edition = edition;
    }

    details(){
        let x ="";
        let table = document.getElementById('books_detail');
        x+= `
        <tr>
            <td>${this.name}</td>
            <td>${this.author}</td>
            <td>${this.price}</td>
            <td>${this.edition}</td>
            </tr>
        `;
        table.innerHTML+=x;
    }
}
let HTML_book = new books("HTML", "Sir Ali", 13.99, 2);
let CSS_book = new books("CSS", "Sir Umer", 15.99, 2);
let ADV_JS_book = new books("ADV_JS", "Miss Fariha", 21.99, 1);
let XML_book = new books("XML", "Sir Hasan", 15.99, 3);
let PHP_book = new books("PHP", "Sir ruhan", 11.31, 4);

HTML_book.details();
CSS_book.details();
ADV_JS_book.details();
XML_book.details();
PHP_book.details();