import { Component, computed, ElementRef, input, Input, linkedSignal, NgModule, Output, output, signal, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  //stanalone default olarak true şeklinde geliyor app module kullanamk istiyorsak standalone false yazmamız lazım//
  selector: 'app-root',
  imports: [FormsModule],
  template:`<h1>Angular 19 Yenilikleri</h1>
  <!-- hot reload css içerisinde değişilşik yaptıgımızda  -->
  <input [(ngModel)]="name">
  <p>{{value}}</p>
  
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19';
  name=signal<string>("");
  fullName=computed(()=>{
    // işlemler
    return "bay" + this.name();
  });
  // fullNameLinked=linkedSignal(()=>{
  //   //işlemler
  //   return "bay" + this.name;
  // })

  fullNameLinked=linkedSignal({
    source:this.name,
    computation:((newversion,prevversion)=>{
    console.log("new version:" + newversion);
    console.log("old version:" + prevversion?.value);
    return "..." + this.name();
    })
  });
  readonly value= input.required<string>;
  readonly event=output<string>();
  readonly h1e1=viewChild.required<ElementRef<HTMLHeadingElement>>("h1element");
  constructor(){
     
   // this.value.set("test"); // set edilemez
  }
}
