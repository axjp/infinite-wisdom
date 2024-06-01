import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infobook',
  templateUrl: './infobook.component.html',
  styleUrl: './infobook.component.css'
})
export class InfobookComponent {
books: any=null
constructor(private httpClient: HttpClient){


}

getbooks() {
  const url = 'http://localhost:3000/books';
  this.httpClient.get(url).subscribe(response => {
    this.books = response;
  });
}

}
