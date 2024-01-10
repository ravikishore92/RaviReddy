import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Output() userP = new EventEmitter<{userName:string,passWord:string}>(); 
  @ViewChild('inputUser', {static:false}) username: ElementRef;
  
  name:string='';
  pass:string='';



  fun(inputData : HTMLInputElement)
  {
      this.userP.emit({
        userName:this.username.nativeElement.value,
        passWord:inputData.value
      })
  }

  check():boolean{
    if(this.name != '' &&  this.pass != '')
    return false;
else
  return true;
  }
}
