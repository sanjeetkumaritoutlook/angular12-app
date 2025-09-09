import { NgModule,Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {createCustomElement} from '@angular/elements';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ReactiveFormsModule } from '@angular/forms';
/*import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
/*const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule
];*/
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedbackFormComponent,
    ContactComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	// ...materialModules,
	ReactiveFormsModule,
	 BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    FeedbackFormComponent
  ]
})
export class AppModule { 
  constructor(private injector:Injector){}
  ngDoBootstrap() {
    const el = createCustomElement(FeedbackFormComponent, { injector: this.injector });
    customElements.define('feedback-forms', el);
   }

}
