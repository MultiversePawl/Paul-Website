import { Component, OnInit } from '@angular/core';
import { posts } from '../posts';
@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
 posts = posts;
  constructor() { }

  ngOnInit(): void {
  }

}
