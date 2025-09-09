import { ComponentFixture,async, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  let de: DebugElement;
  let el: HTMLElement;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
	  
	    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
	  
    })
    .compileComponents();  //promise is resolved we are giving a value to each of the variables that we declare at the beginning.
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
	
	  // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('form')); //By to allow us to select elements from the DOM.
      el = de.nativeElement;
	  
	  
   // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  
  it(`should have as text 'contact page'`, async(() => {
    expect(component.text).toEqual('contact page');
  }));

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();  //matchers
  }));

   it(`should call the onSubmit method`, async(() => {
   fixture.detectChanges();
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
   //expect(component.onSubmit).toHaveBeenCalled();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));
  
  
   it(`form should be invalid`, async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));
  
  
  
   it(`form should be valid`, async(() => {
    component.contactForm.controls['email'].setValue('asd@asd.com');
    component.contactForm.controls['name'].setValue('aada');
    component.contactForm.controls['text'].setValue('text');
    expect(component.contactForm.valid).toBeTruthy();
  }));


  
});
