import { Component, ViewChild, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'AngIntro';
  parentMessage:string = 'Message change';
  message:string | undefined;
  fromChildOutput:string | undefined;

  @ViewChild(PostComponent)
  childComp!: PostComponent; 

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.message = this.childComp.childMessage;
    this.cdRef.detectChanges(); // Manually trigger change detection
    console.log("Message from child:", this.message);
  }

  receiveMessage($event: string){
    this.fromChildOutput = $event;
  }
}
