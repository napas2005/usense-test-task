import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})
export class PasswordFormComponent{
  password: string = '';
  complexity: number = 0;
  visible:boolean = false;
  passwordType:boolean = false;
  

  onPasswordChange() {
    this.complexity = this.calculateComplexity(this.password);
  }


  calculateComplexity(password: string) {
    const hasLettersEn = this.password.match(/[a-zA-Z]/);
    const hasLettersUkr = this.password.match(/[а-яіїєґҐЄІЇ]/iu);
    const hasNumbers = this.password.match(/[0-9]/);
    const hasSymbols = this.password.match(/[!@#$%^&*()_+]/);
    
    if (password.length === 0) {
      return 0;
    }

    let count = 0;
    if (hasLettersEn || hasLettersUkr) {
      count++;
    }
    if (hasNumbers) {
      count++;
    }
    if (hasSymbols) {
      count++;
    }

    return count;
  }

  viewPassword() {
    this.visible = !this.visible;
    this.passwordType = !this.passwordType;
  }

}
