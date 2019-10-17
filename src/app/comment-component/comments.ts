import { Component } from "@angular/core";

@Component({
  selector: "comments",
  templateUrl: "./comments.html",
  styleUrls: ["comments.scss", "../../assets/materialize.css"],
})

export class CommentComponent {
  constructor() { }
  private comments: any[];
  newComment: CommentInterface = {

  };
  ngOnInit() {
    this.comments = JSON.parse(localStorage.getItem("comments")) === null ?
      [] : JSON.parse(localStorage.getItem("comments"));
    console.log(this.comments);
  }

  onSubmit() {
    this.newComment.date = (new Date()).toLocaleString();
    this.comments.push(this.newComment);
    localStorage.setItem("comments", JSON.stringify(this.comments));
    this.newComment = {};
  }
}

interface CommentInterface {
  name?: string;
  date?: string;
  text?: string;
}
