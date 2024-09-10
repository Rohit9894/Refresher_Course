let books=[];
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  Book.prototype.getSummary=function(){
     return (`${this.title} by ${this.author} pulished in ${this.year}`)
  }
 books.push(new Book("Biology","Rk Narayan","2024"))
 books.push(new Book("Physics","Pradeep","2024"))
 books.push(new Book("Chemistry","Rs Agrawal","2024"))
export default books;