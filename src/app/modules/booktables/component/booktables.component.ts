import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




@Component({
  selector: 'app-booktables',
  templateUrl: './booktables.component.html',
  styleUrl: './booktables.component.css'
})
export class BooktablesComponent {
books: any= null;


  constructor(private httpClient: HttpClient, private router: Router) {

    this.getbooks();
  }

  getbooks() {
    const url = 'http://localhost:3000/books';
    this.httpClient.get(url).subscribe(response => {
      this.books = response;
    });
  }


  delete(idbook: number) {
    const url = 'http://localhost:3000/registerbook/' + idbook;
    this.httpClient.delete(url).subscribe(response => {
      this.getbooks();
    });
  }

  update(idbook: number) {
    this.router.navigate(['/upload', idbook])
  }

}
