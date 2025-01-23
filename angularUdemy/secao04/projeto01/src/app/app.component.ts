import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial Alterado"
  inputType = "text"
  isDisable = false;

  enableInput(){
    this.isDisable = true;
  }

  disableInput(){
    this.isDisable = false;
  }
}
