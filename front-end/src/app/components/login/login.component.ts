import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  apiUrl = 'http://localhost:8080/api/v1/auth/authenticate';

  text: string = '';
  constructor(private http: HttpClient) {}

  onSubmit() {
    // Create a request object with email and password
    const request = {
      email: this.username,
      password: this.password,
    };

    var token = '';

    // Send the POST request to the /authenticate endpoint
    this.http.post(this.apiUrl, request).subscribe(
      (response: any) => {
        token = response.token;
        console.log(token);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
