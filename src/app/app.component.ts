import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
     
  title:' Mon premier post',
  content: 'le contenu du premier post',
  loveIts: 6,
  created_at: new Date()

    },
    {
      title:' Mon deuxieme post',
      content: 'contenu du deuxieme post',
      loveIts:-1,
      created_at: new Date()
    },
    {
      title:' Encore un post',
  content: 'contenu du troisieme post',
  loveIts: 0,
  created_at: new Date()
    }
  ];
  title = 'app';
}
