import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    username:"dream",
    password:"A12345678"
  }

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {


  }

  login() {
    let model = {
      username : this.loginUserData.username,
      password : this.loginUserData.password
    }

    this.loginService.login(model).then((res:any)=>{ 
      
      localStorage.setItem('token', JSON.stringify(res))
      this.router.navigate(['/system'])

    }).catch((err:any)=>{

    })
  }
  

}
