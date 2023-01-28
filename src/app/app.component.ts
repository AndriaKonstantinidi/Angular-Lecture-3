import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular3';
  // firstName:String = "Andria";
  // lastName:String = "Konstantinidi";
  // age:Number = 13;
  // img:String = "https://th.bing.com/th/id/OIP.RiNmH5AIoZwVGvB835DNuAHaE8?pid=ImgDet&rs=1"
  // userName:String = '';
  // onBtnClick(){
  //   console.log("btn was clicked")
  // }
  firstName:String = '';
  lastName:String = '';
  age!:Number;
  num!:Number;
  gender:String = '';
}
