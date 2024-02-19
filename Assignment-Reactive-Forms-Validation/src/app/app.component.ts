import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForm, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment-Reactive-Forms-Validation';

  users: any[] = [
    {
      username: 'mesum',
      password: 'hello123',
      email: 'info@mesum.online',
    },
    {
      username: 'rafya',
      password: 'hacker123',
      email: 'rafay@worldoftech.company',
    },
    {
      username: 'zohair',
      password: 'dev123',
      email: 'zohair@worldoftech.company',
    },
    {
      username: 'sarim',
      password: 'ceo123',
      email: 'sarim@worldoftech.company',
    },
    {
      username: 'huzaifa',
      password: 'seo123',
      email: 'huzaifa@worldoftech.company',
    }
  ]

  username = '';
  password = '';
  email = '';

  validate = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  })
  onSubmit() {

    for (const data of this.users) {
      if (this.validate.value.username == data.username && this.validate.value.password == data.password && this.validate.value.email == data.email) {
        this.username = this.validate.value.username ?? '';
        this.password = this.validate.value.password ?? '';
        this.email = this.validate.value.email ?? '';
      }
    }


    console.warn(this.validate.value);
  }

  reset() {
    this.username = '';
    this.password = '';
    this.email = '';
  }
}
