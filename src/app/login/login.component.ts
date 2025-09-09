import { Component,Input,Output, EventEmitter,ViewEncapsulation   } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None

})
export class LoginComponent  {

 @Input() username = '';
  @Input() password = '';

  @Output('login') login = new EventEmitter<any>();

  constructor() { }

  doLogin() {
    let user = {
      "username": this.username,
      "password": this.password
    };
    this.login.emit(user)
    console.log('emitting event');
  }

}
