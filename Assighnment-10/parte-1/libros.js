
class BookInfo{
    constructor(title, author){
     this.title=title;
     this.author=author;
    } 
    
    get getTitulo(){
        return this.title;
    }
    get getAuthor(){
        return this.author;
    }
    completeName(){
        return `${this.title}, ${this.author.toUpperCase()}`
    }
    mostrarDatosEnConsola(){
        console.log(this.completeName());
    }
    mostrarDatosEnAlert(){
        alert(this.completeName());
    }
   
    mostrarDatos(value){
        switch(value){
            case "alert":
                this.mostrarDatosEnAlert();
            break;
            case "console":
            default :
                this.mostrarDatosEnConsola();
            break;
        }
    }
}   

   
let newBook= new BookInfo ("Angeles y Demonios","Dan Brown");
let newBook2= new BookInfo ('Fuego y Sangre', 'George R. R. Martin');

let tituloDelNuevoLibro = newBook2.getTitulo();
newBook.mostrarDatos("console");