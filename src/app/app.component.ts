import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice2';
  users: { username: string, password: string }[] = [];

  inputUserData(input:{userName:string,passWord:string})
  {
       this.users.push({
        username:input.userName,
        password:input.passWord
       });
  }
}
