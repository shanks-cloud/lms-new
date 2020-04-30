import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-astronomy',
  templateUrl: './astronomy.component.html',
  styleUrls: ['./astronomy.component.css']
})

export class AstronomyComponent implements OnInit {

  filePathCategories = [];
  category: boolean;
  url: string;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.url = this.route.snapshot.url.join('/');
    console.log("url ref is " + this.url);

    this.fetchAllFilesByCategory();

  }

  fetchAllFilesByCategory() {
    this.category = true;
    this.bookService.fetchAllFilesByCategory(this.url).subscribe((data) => {
      this.filePathCategories = data;
    });
  }

}
