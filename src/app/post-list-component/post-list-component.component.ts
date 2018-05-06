import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() title: string ;
  @Input() content: string;
  @Input() loveIts: number ;
  @Input() created_at: Date;
  constructor() { }

  ngOnInit() {
  }

  getColor(){
    if(this.loveIts<0){
      return 'red';
    }else if(this.loveIts>0){
     return 'green';


    }
}

loveIt(){
  this.loveIts++;
}
dontloveIt(){
  this.loveIts--;
}
}
