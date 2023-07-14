import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
isEmpty=true
isShort=false
isEasy=false
isMedium=false
isHard=false
@ViewChild('password')pass:ElementRef
  ngOnInit(): void {

  }

  checkPasswordStrength(){
    this.empty()
    this.short()
    this.easy()
    this.medium()
    this.hard()
  }
  empty(){
    this.pass.nativeElement.value?this.isEmpty=false:this.isEmpty=true
  }
  short(){
    this.pass.nativeElement.value.length>0&&this.pass.nativeElement.value.length<8?this.isShort=true:this.isShort=false
  }
  easy() {
    const pattern = /^(?:[a-zA-Z]+|\d+|[^a-zA-Z\d\s]+)$/;
    pattern.test(this.pass.nativeElement.value) ? this.isEasy=true :this.isEasy=false
  }
  medium() {
    const pattern = /(?:[a-zA-Z]+\d+|[a-zA-Z]+[^a-zA-Z\d\s]+|\d+[^a-zA-Z\d\s]+)/
    pattern.test(this.pass.nativeElement.value) ? this.isMedium=true :this.isMedium=false
  }


  hard()  {
    const pattern = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s])[a-zA-Z\d\s]*/
    pattern.test(this.pass.nativeElement.value) ? this.isHard=true :this.isHard=false
  }

}
