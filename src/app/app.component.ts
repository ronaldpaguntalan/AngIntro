import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 message: string = 'Message From Typescript Component File';

 imgUrl: string = 'https://media.istockphoto.com/id/1169427542/photo/google.jpg?s=612x612&w=0&k=20&c=rqoG1nVPxeZeIHFqs0M2TI7CBwpZ1rOTG2H3PWTrdBY=';

 bool:boolean = false;

 userName: string = "";

 buttonClicked(){
  console.log("the button is clicked")
 }

 onKeyUp($event: any){
    console.warn($event.target.value)
 }

 getValue(username: string){
  console.log(username)
 }

 getValueTwoWay(){
  console.log(this.userName);
 }

}
